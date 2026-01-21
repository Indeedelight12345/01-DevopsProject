# Network Module - Creates VPC and Subnet
module "network" {
  source = "./modules/network"

  project_id    = var.project_id
  region        = var.region
  network_name  = var.network_name
  subnet_name   = var.subnet_name
  subnet_cidr   = var.subnet_cidr
  firewall_rules = var.firewall_rules
}

# Compute Module - Creates VM Instances
module "compute" {
  source = "./modules/compute"

  project_id           = var.project_id
  region               = var.region
  zone                 = "${var.region}-a"
  subnet_id            = module.network.subnet_id
  vm_count             = var.vm_count
  machine_type         = var.machine_type
  boot_disk_size       = var.boot_disk_size
  boot_disk_type       = var.boot_disk_type
  image_family         = var.image_family
  image_project        = var.image_project
  enable_external_ip   = var.enable_external_ip
  tags                 = var.tags
  environment          = var.environment
}
