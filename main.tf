### PROVIDER ###
provider "aws" {
  region = local.region
}

### VARIABLES ###
variable "environment_region" {
  type = map(string)
  default = {
    develop = "us-east-2"
    homolog = "us-west-2"
    main = "sa-east-1"
  }
}
variable "lambda_name" {}
variable "lambda_variables" {
  type=map(string)
  default = {
    "value1" = "key1"
    }
  }
variable "project_name" { default="catalyst" }
variable "lambda_timeout" {}
variable "lambda_memory_size" {}
variable "cod_version" {}

### LOCALS ###
locals {  
  region    = lookup(var.environment_region, terraform.workspace)
}  

### DATA ###
data "aws_caller_identity" "current" {}

## RESOURCES ###
module "lambda" {
  source = "s3::https://s3-us-east-2.amazonaws.com/terraform-adventures-modules/functions/lambda-docker.zip"
  lambda_name         = var.lambda_name
  project_name        = var.project_name
  region              = local.region  
  lambda_memory_size  = var.lambda_memory_size
  lambda_timeout      = var.lambda_timeout
  cod_version         = var.cod_version
  lambda_variables  = var.lambda_variables  
}
output "lambda_function_name" {
  value = module.lambda.lambda_function_name
}
