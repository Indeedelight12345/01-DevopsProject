resource "google_compute_instance" "vm" {
  name         = "${var.environment}-${var.cluster_name}-${var.role}"
  machine_type = var.machine_type
  zone         = "${var.region}-a"
  tags         = var.tags

  boot_disk {
    initialize_params {
      image = "${var.image_project}/${var.image_family}"
      size  = var.boot_disk_size
      type  = var.boot_disk_type
    }
  }

  network_interface {
    network    = var.network
    subnetwork = var.subnetwork

    dynamic "access_config" {
      for_each = var.enable_external_ip ? [1] : []
      content {}
    }
  }

  metadata = merge(
    {
      enable-oslogin = "FALSE"
      node_role      = var.role
      cluster_name   = var.cluster_name
    },
    var.ssh_public_key != "" ? { "ssh-keys" = "${var.ssh_user}:${var.ssh_public_key}" } : {}
  )
}

