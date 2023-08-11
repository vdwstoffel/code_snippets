# MongoDB

[MongoDB Install Docs](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/)


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
# Docker

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