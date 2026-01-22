project_id = "kkgcplabs01-039"

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
    name            = "allow-k8s"
    direction       = "INGRESS"
    priority        = 1001
    source_ranges   = ["10.0.0.0/8"]
    allow_protocols = ["tcp"]
    allow_ports     = ["6443", "2379-2380", "10250", "10251", "10252"]
  }
]
