module "network" {
  source          = "./modules/network"
  project_id      = var.project_id
  region          = var.region
  environment     = var.environment
  network_name    = var.network_name
  subnet_name     = var.subnet_name
  subnet_cidr     = var.subnet_cidr
  firewall_rules  = var.firewall_rules
}

# -------- CLUSTER 1 --------
module "cluster1_master" {
  source        = "./modules/compute"
  project_id   = var.project_id
  region       = var.region
  environment  = var.environment
  cluster_name = "cluster-1"
  role         = "master"

  machine_type       = var.machine_type
  boot_disk_size     = var.boot_disk_size
  boot_disk_type     = var.boot_disk_type
  image_family       = var.image_family
  image_project      = var.image_project
  enable_external_ip = var.enable_external_ip
  tags               = ["k8s", "master"]

  network    = module.network.network_self_link
  subnetwork = module.network.subnet_self_link

  ssh_user       = var.ssh_user
  ssh_public_key = file(var.ssh_public_key_path)
}

module "cluster1_worker" {
  source        = "./modules/compute"
  project_id   = var.project_id
  region       = var.region
  environment  = var.environment
  cluster_name = "cluster-1"
  role         = "worker"

  machine_type       = var.machine_type
  boot_disk_size     = var.boot_disk_size
  boot_disk_type     = var.boot_disk_type
  image_family       = var.image_family
  image_project      = var.image_project
  enable_external_ip = var.enable_external_ip
  tags               = ["k8s", "worker"]

  network    = module.network.network_self_link
  subnetwork = module.network.subnet_self_link

  ssh_user       = var.ssh_user
  ssh_public_key = file(var.ssh_public_key_path)
}

# -------- CLUSTER 2 --------
module "cluster2_master" {
  source        = "./modules/compute"
  project_id   = var.project_id
  region       = var.region
  environment  = var.environment
  cluster_name = "cluster-2"
  role         = "master"

  machine_type       = var.machine_type
  boot_disk_size     = var.boot_disk_size
  boot_disk_type     = var.boot_disk_type
  image_family       = var.image_family
  image_project      = var.image_project
  enable_external_ip = var.enable_external_ip
  tags               = ["k8s", "master"]

  network    = module.network.network_self_link
  subnetwork = module.network.subnet_self_link

  ssh_user       = var.ssh_user
  ssh_public_key = file(var.ssh_public_key_path)
}

module "cluster2_worker" {
  source        = "./modules/compute"
  project_id   = var.project_id
  region       = var.region
  environment  = var.environment
  cluster_name = "cluster-2"
  role         = "worker"

  machine_type       = var.machine_type
  boot_disk_size     = var.boot_disk_size
  boot_disk_type     = var.boot_disk_type
  image_family       = var.image_family
  image_project      = var.image_project
  enable_external_ip = var.enable_external_ip
  tags               = ["k8s", "worker"]

  network    = module.network.network_self_link
  subnetwork = module.network.subnet_self_link

  ssh_user       = var.ssh_user
  ssh_public_key = file(var.ssh_public_key_path)
}
