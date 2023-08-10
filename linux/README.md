# MongoDB

[MongoDB Install Docs](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/)

## Install mongodb

```bash
#!/usr/bon/bash

# Read more https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/

# Import the public key used by the package management system
sudo apt-get install gnupg curl

# Issue the following command to import the MongoDB public GPG Key from https://pgp.mongodb.com/server-6.0.asc
curl -fsSL https://pgp.mongodb.com/server-6.0.asc | \
   sudo gpg -o /usr/share/keyrings/mongodb-server-6.0.gpg \
   --dearmor

# Create a list file for MongoDB. Ubuntu 22.04
echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-6.0.gpg ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list

# Reload local package database
sudo apt-get update

# Install the MongoDB packages
sudo apt-get install -y mongodb-org

echo "mongodb-org hold" | sudo dpkg --set-selections
echo "mongodb-org-database hold" | sudo dpkg --set-selections
echo "mongodb-org-server hold" | sudo dpkg --set-selections
echo "mongodb-mongosh hold" | sudo dpkg --set-selections
echo "mongodb-org-mongos hold" | sudo dpkg --set-selections
echo "mongodb-org-tools hold" | sudo dpkg --set-selections
```

## Starting mongo service

```bash
# Start MongoDB
sudo systemctl start mongod

# Verify that MongoDB has started successfully
sudo systemctl status mongod

# Stop MongoDB.
sudo systemctl stop mongod

# Restart MongoDB
sudo systemctl restart mongod

# Getting Started
mongosh
```

## Using mongo

```bash
# open mondodb terminal
mongosh

# Show all databases
show dbs

# Create new database
use <database_name>
# before you can see the database you have to add a record to it

# insert
> db.user.insert({name: 'Ada Lovelace', age: 205})
```

# PostgreSQL
## Installing postgresql
```bash
#!/usr/bin/bash

# Setup script for postgresql
sudo apt update -y 
sudo apt install postgresql postgresql-contrib -y 
sudo systemctl start postgresql.service
```

## Using postgresql
```bash
# Open shell
sudo -i -u postgres

# Enter console
psql
```

## Create Super User
```bash
# Open shell
sudo -i -u postgres
psql
CREATE ROLE mysuperuser2 WITH SUPERUSER CREATEDB CREATEROLE LOGIN ENCRYPTED PASSWORD 'mysuperpass2';
# List all the users
\du
```

## Create New Database
```bash
# Open shell
sudo -i -u postgres

psql

CREATE DATABASE new_test;
# list all db
# \list

DROP DATABASE new_test; # remove the database
```
# Install Docker
```bash
#!/usr/bin/bash

arg1=$1

if [ $arg1 == 'install' ]
then
    if command -v docker &>/dev/null;
    then
        echo "Docker already installed"
        docker --version
    else
        echo "installing docker"
        # Update the apt package index and install packages to allow apt to use a repository over HTTPS
        sudo apt-get update
        sudo apt-get install ca-certificates curl gnupg
        # Add Docker’s official GPG key
        sudo install -m 0755 -d /etc/apt/keyrings
        curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
        sudo chmod a+r /etc/apt/keyrings/docker.gpg
        # Use the following command to set up the repository
        echo \
        "deb [arch="$(dpkg --print-architecture)" signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
        "$(. /etc/os-release && echo "$VERSION_CODENAME")" stable" | \
        sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
        # Update the apt package index
        sudo apt-get update -y
        # Install Docker Engine, containerd, and Docker Compose
        sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
    fi

elif [ $arg1 == 'uninstall' ]
then
    echo 'Uninstalling docker'
    sudo apt-get purge docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin docker-ce-rootless-extras
    
else
    echo "Provide install or uninstall as an argument"
fi
```

## Run docker without sudo

```bash
# Create a docker group
sudo groupadd docker 

# Add your use to the docker group
sudo usermod -aG docker $USER

# restart group or logout/restart
newgrp docker
```

# Alias Python
```bash
sudo apt-get install python-is-python3
```