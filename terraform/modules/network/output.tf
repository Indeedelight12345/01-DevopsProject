output "network_id" {
  value       = google_compute_network.vpc.id
  description = "VPC Network ID"
}

output "network_name" {
  value       = google_compute_network.vpc.name
  description = "VPC Network Name"
}

output "network_self_link" {
  value       = google_compute_network.vpc.self_link
  description = "VPC Network self link"
}

output "subnet_id" {
  value       = google_compute_subnetwork.subnet.id
  description = "Subnet ID"
}

output "subnet_name" {
  value       = google_compute_subnetwork.subnet.name
  description = "Subnet Name"
}

output "subnet_self_link" {
  value       = google_compute_subnetwork.subnet.self_link
  description = "Subnet self link"
}

output "firewall_rules" {
  value = {
    for rule in google_compute_firewall.rules :
    rule.name => {
      id   = rule.id
      name = rule.name
    }
  }
  description = "Created firewall rules"
}

