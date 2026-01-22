output "cluster1_master_ip" {
  description = "External IP of Cluster 1 Master"
  value       = module.cluster1_master.external_ip
}

output "cluster1_worker_ip" {
  description = "External IP of Cluster 1 Worker"
  value       = module.cluster1_worker.external_ip
}

output "cluster2_master_ip" {
  description = "External IP of Cluster 2 Master"
  value       = module.cluster2_master.external_ip
}

output "cluster2_worker_ip" {
  description = "External IP of Cluster 2 Worker"
  value       = module.cluster2_worker.external_ip
}

output "all_vm_ips" {
  description = "Map of all VM external IPs"
  value = {
    cluster1_master = module.cluster1_master.external_ip
    cluster1_worker = module.cluster1_worker.external_ip
    cluster2_master = module.cluster2_master.external_ip
    cluster2_worker = module.cluster2_worker.external_ip
  }
}
