#! /usr/bin/bash

##########
# IMAGES #
##########
# View images
docker images

# Build an image from a Dockerfile
# Use a dot at the end to specify the current directory
# -t: tag the image with a name
docker build -t <image_name> .

# delete a image
docker rmi <image_name>

# Push an image to Docker Hub
docker push <image_name>

# Pull an image from Docker Hub
docker pull <image_name>

###########
# CONTAINERS
###########
# List all containers
docker ps

# Run a container
docker run <image_name>

# -d: run in background
# -p: map host port to container port
docker run -d -p <host_port>:<container_port> <image_name>

# Stop a container
docker stop <container_id>
