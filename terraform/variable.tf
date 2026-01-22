variable "project_id" {}
variable "region" {
  default = "us-central1"
}
variable "environment" {
  default = "production"
}

variable "network_name" {
  default = "main-vpc"
}
variable "subnet_name" {
  default = "main-subnet"
}
variable "subnet_cidr" {
  default = "10.0.1.0/24"
}
variable "firewall_rules" {
  default = [
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
    }
  ]
}

variable "machine_type" {
  default = "e2-medium"
}
variable "boot_disk_size" {
  default = 20
}
variable "boot_disk_type" {
  default = "pd-standard"
}
variable "image_family" {
  default = "debian-11"
}
variable "image_project" {
  default = "debian-cloud"
}
variable "enable_external_ip" {
  default = true
}
variable "tags" {
  default = ["web-server"]
}

variable "ssh_user" {
  default = "k8sadmin"
}

variable "ssh_public_key_path" {
  default = "~/.ssh/google_compute_engine.pub"
}
