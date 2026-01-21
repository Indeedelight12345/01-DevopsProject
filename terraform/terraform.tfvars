
project_id = "your-gcp-project-id" 
region     = "us-central1"

# Network Configuration
network_name = "main-vpc"
subnet_name  = "main-subnet"
subnet_cidr  = "10.0.1.0/24"


vm_count      = 2
machine_type  = "e2-medium"
boot_disk_size = 20
boot_disk_type = "pd-standard"
image_family  = "debian-11"
image_project = "debian-cloud"


enable_external_ip = true
tags               = ["web-server", "http", "https"]


environment = "production"


firewall_rules = [
  {
    name            = "allow-ssh"
    direction       = "INGRESS"
    priority        = 1000
    source_ranges   = ["0.0.0.0/0"]  
    allow_protocols = ["tcp"]
    allow_ports     = ["22"]
  },
  {
    name            = "allow-http"
    direction       = "INGRESS"
    priority        = 1001
    source_ranges   = ["0.0.0.0/0"]
    allow_protocols = ["tcp"]
    allow_ports     = ["80"]
  },
  {
    name            = "allow-https"
    direction       = "INGRESS"
    priority        = 1002
    source_ranges   = ["0.0.0.0/0"]
    allow_protocols = ["tcp"]
    allow_ports     = ["443"]
  },
  {
    name            = "allow-internal"
    direction       = "INGRESS"
    priority        = 1003
    source_ranges   = ["10.0.1.0/24"]
    allow_protocols = ["tcp", "udp"]
    allow_ports     = ["0-65535"]
  }
]
