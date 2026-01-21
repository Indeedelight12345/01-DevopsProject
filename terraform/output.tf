output "vpc_network_id" {
  value       = module.network.network_id
  description = "VPC Network ID"
}

output "vpc_network_name" {
  value       = module.network.network_name
  description = "VPC Network Name"
}

output "subnet_id" {
  value       = module.network.subnet_id
  description = "Subnet ID"
}

output "subnet_name" {
  value       = module.network.subnet_name
  description = "Subnet Name"
}

output "firewall_rules" {
  value       = module.network.firewall_rules
  description = "Created firewall rules"
}

output "instance_ids" {
  value       = module.compute.instance_ids
  description = "IDs of the created instances"
}

output "instance_names" {
  value       = module.compute.instance_names
  description = "Names of the created instances"
}

output "instance_internal_ips" {
  value       = module.compute.instance_internal_ips
  description = "Internal IP addresses of the instances"
}

output "instance_external_ips" {
  value       = module.compute.instance_external_ips
  description = "External IP addresses of the instances"
}

output "instance_zones" {
  value       = module.compute.instance_zones
  description = "Zones of the instances"
}

output "ssh_connection_strings" {
  value = {
    for idx, name in module.compute.instance_names :
    name => "gcloud compute ssh ${name} --zone=${var.region}-a"
  }
  description = "SSH connection strings for each instance"
}
