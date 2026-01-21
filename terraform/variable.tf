variable "project_id" {
  type        = string
  description = "Google Cloud Project ID"
}

variable "region" {
  type        = string
  description = "Google Cloud Region"
  default     = "us-central1"
}

variable "environment" {
  type        = string
  description = "Environment name"
  default     = "production"
}

variable "network_name" {
  type        = string
  description = "VPC Network name"
  default     = "main-vpc"
}

variable "subnet_name" {
  type        = string
  description = "Subnet name"
  default     = "main-subnet"
}

variable "subnet_cidr" {
  type        = string
  description = "Subnet CIDR range"
  default     = "10.0.1.0/24"
}

variable "firewall_rules" {
  type = list(object({
    name            = string
    direction       = string
    priority        = number
    source_ranges   = list(string)
    allow_protocols = list(string)
    allow_ports     = list(string)
  }))
  description = "Firewall rules"
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

variable "vm_count" {
  type        = number
  description = "Number of VMs to create"
  default     = 2
}

variable "machine_type" {
  type        = string
  description = "Machine type for compute instances"
  default     = "e2-medium"
}

variable "boot_disk_size" {
  type        = number
  description = "Boot disk size in GB"
  default     = 20
}

variable "boot_disk_type" {
  type        = string
  description = "Boot disk type"
  default     = "pd-standard"
}

variable "image_family" {
  type        = string
  description = "Image family for the boot disk"
  default     = "debian-11"
}

variable "image_project" {
  type        = string
  description = "Image project"
  default     = "debian-cloud"
}

variable "enable_external_ip" {
  type        = bool
  description = "Enable external IP for instances"
  default     = true
}

variable "tags" {
  type        = list(string)
  description = "Network tags for instances"
  default     = ["web-server"]
}
