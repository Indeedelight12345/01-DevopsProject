variable "project_id" {
  type        = string
  description = "Google Cloud Project ID"
}

variable "region" {
  type        = string
  description = "Google Cloud Region"
  default     = "us-central1"
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
  description = "List of firewall rules to create"
}
