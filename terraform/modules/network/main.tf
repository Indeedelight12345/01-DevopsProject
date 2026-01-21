# Create VPC Network
resource "google_compute_network" "vpc" {
  name                    = var.network_name
  auto_create_subnetworks = false
  project                 = var.project_id

  depends_on = []
}


resource "google_compute_subnetwork" "subnet" {
  name          = var.subnet_name
  ip_cidr_range = var.subnet_cidr
  region        = var.region
  network       = google_compute_network.vpc.id
  project       = var.project_id

  depends_on = [google_compute_network.vpc]
}


resource "google_compute_firewall" "rules" {
  for_each = { for rule in var.firewall_rules : rule.name => rule }

  name      = "${var.network_name}-${each.value.name}"
  network   = google_compute_network.vpc.name
  direction = each.value.direction
  priority  = each.value.priority
  project   = var.project_id

  source_ranges = each.value.direction == "INGRESS" ? each.value.source_ranges : null
  target_tags   = ["web-server"]

  dynamic "allow" {
    for_each = each.value.allow_protocols
    content {
      protocol = allow.value
      ports    = allow.value == "tcp" || allow.value == "udp" ? each.value.allow_ports : []
    }
  }

  depends_on = [google_compute_network.vpc]
}


