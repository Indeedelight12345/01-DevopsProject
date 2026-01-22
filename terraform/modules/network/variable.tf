variable "project_id" {}
variable "region" {}
variable "environment" {}
variable "network_name" {}
variable "subnet_name" {}
variable "subnet_cidr" {}

variable "firewall_rules" {
  type = list(object({
    name            = string
    direction       = string
    priority        = number
    source_ranges   = list(string)
    allow_protocols = list(string)
    allow_ports     = list(string)
  }))
}
