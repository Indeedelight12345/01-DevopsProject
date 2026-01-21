variable "project_id" {
  type        = string
  description = "Google Cloud Project ID"
}

variable "region" {
  type        = string
  description = "Google Cloud Region"
  default     = "us-central1"
}

variable "zone" {
  type        = string
  description = "Google Cloud Zone"
  default     = "us-central1-a"
}

variable "subnet_id" {
  type        = string
  description = "Subnet ID for the instances"
}

variable "vm_count" {
  type        = number
  description = "Number of VM instances to create"
  default     = 2
}

variable "machine_type" {
  type        = string
  description = "Machine type for the instances"
  default     = "e2-medium"
}

variable "boot_disk_size" {
  type        = number
  description = "Boot disk size in GB"
  default     = 20
}

variable "boot_disk_type" {
  type        = string
  description = "Boot disk type (pd-standard, pd-balanced, pd-ssd)"
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
  description = "Network tags for the instances"
  default     = ["web-server"]
}

variable "environment" {
  type        = string
  description = "Environment name"
  default     = "production"
}
