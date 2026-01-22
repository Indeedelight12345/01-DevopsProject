resource "google_compute_network" "vpc" {
  name                    = "${var.environment}-${var.network_name}"
  auto_create_subnetworks = false
}

resource "google_compute_subnetwork" "subnet" {
  name          = "${var.environment}-${var.subnet_name}"
  region        = var.region
  network       = google_compute_network.vpc.id
  ip_cidr_range = var.subnet_cidr
}

resource "google_compute_firewall" "rules" {
  for_each = { for r in var.firewall_rules : r.name => r }

  name      = "${var.environment}-${each.value.name}"
  network   = google_compute_network.vpc.name
  direction = each.value.direction
  priority  = each.value.priority

  source_ranges = each.value.source_ranges

  allow {
    protocol = each.value.allow_protocols[0]
    ports    = each.value.allow_ports
  }
}
