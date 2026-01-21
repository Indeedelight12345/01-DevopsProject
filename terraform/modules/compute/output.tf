output "instance_ids" {
  value       = [for instance in google_compute_instance.instances : instance.id]
  description = "IDs of the created instances"
}

output "instance_names" {
  value       = [for instance in google_compute_instance.instances : instance.name]
  description = "Names of the created instances"
}

output "instance_internal_ips" {
  value = [
    for instance in google_compute_instance.instances :
    instance.network_interface[0].network_ip
  ]
  description = "Internal IP addresses of the instances"
}

output "instance_external_ips" {
  value = [
    for instance in google_compute_instance.instances :
    length(instance.network_interface[0].access_config) > 0 ? instance.network_interface[0].access_config[0].nat_ip : ""
  ]
  description = "External IP addresses of the instances"
}

output "instance_zones" {
  value       = [for instance in google_compute_instance.instances : instance.zone]
  description = "Zones of the instances"
}

output "instance_self_links" {
  value       = [for instance in google_compute_instance.instances : instance.self_link]
  description = "Self links of the instances"
}

output "instance_group_id" {
  value       = google_compute_instance_group.instance_group.id
  description = "Instance group ID"
}

output "instance_group_self_link" {
  value       = google_compute_instance_group.instance_group.self_link
  description = "Instance group self link"
}

output "health_check_id" {
  value       = google_compute_health_check.health_check.id
  description = "Health check ID"
}

output "health_check_self_link" {
  value       = google_compute_health_check.health_check.self_link
  description = "Health check self link"
}
