#!/usr/bin/bash

# Setup script for postgresql
sudo apt update -y 
sudo apt install postgresql postgresql-contrib -y 
sudo systemctl start postgresql.service