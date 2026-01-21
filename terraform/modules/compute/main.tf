
data "google_compute_image" "image" {
  family  = var.image_family
  project = var.image_project
}


resource "google_compute_instance" "instances" {
  count         = var.vm_count
  name          = "${var.environment}-vm-${count.index + 1}"
  machine_type  = var.machine_type
  zone          = var.zone
  project       = var.project_id
  tags          = var.tags

  boot_disk {
    initialize_params {
      image = data.google_compute_image.image.self_link
      size  = var.boot_disk_size
      type  = var.boot_disk_type
    }
  }

  network_interface {
    subnetwork = var.subnet_id

    dynamic "access_config" {
      for_each = var.enable_external_ip ? [1] : []
      content {
        nat_ip = null
      }
    }
  }

  metadata = {
    enable-oslogin = "true"
  }

  labels = {
    environment = var.environment
    created-by  = "terraform"
    instance-id = count.index + 1
  }


  provisioner "local-exec" {
    command = "sleep 30"
  }

  depends_on = []
}

# Optional: Create an instance group for load balancing
resource "google_compute_instance_group" "instance_group" {
  name        = "${var.environment}-instance-group"
  description = "Instance group for ${var.vm_count} instances"
  zone        = var.zone
  project     = var.project_id

  instances = [for instance in google_compute_instance.instances : instance.self_link]

  depends_on = [google_compute_instance.instances]
}

# Optional: Health Check for instances
resource "google_compute_health_check" "health_check" {
  name        = "${var.environment}-health-check"
  description = "Health check for instances"
  project     = var.project_id

  http_health_check {
    port = 80
  }

  check_interval_sec  = 30
  timeout_sec         = 10
  healthy_threshold   = 2
  unhealthy_threshold = 3
}
