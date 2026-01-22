variable "project_id" {}
variable "region" {}
variable "environment" {}
variable "cluster_name" {}
variable "role" {}

variable "machine_type" {}
variable "boot_disk_size" {}
variable "boot_disk_type" {}
variable "image_family" {}
variable "image_project" {}
variable "enable_external_ip" {}
variable "tags" {}

variable "network" {}
variable "subnetwork" {}

variable "ssh_user" {
  type        = string
  default     = "k8sadmin"
  description = "Username for SSH access"
}

variable "ssh_public_key" {
  type        = string
  default     = ""
  description = "Public SSH key to inject into the VM"
}
