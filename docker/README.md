# Images

## Build an image
```bash
#   -t: tag
docker build -t <image_name> .
```
## List all images
```bash
docker images
```

## Delete an image
```bash
docker rmi <image_name>

# Delete all unused images
docker image prune -a
```

## Push/Pull images to/from dockerhub
```bash
docker push <image_name>
docker pull <image_name>
```

# Containers

## Run Container
```bash
docker run <image_name>

# host port is what you connect to
# container port is same as app
docker run -d -p <host_port>:<container_port> --name docker_example <image_name>

# Restart a container 
docker start <container_id>
```

## Named Volumes
When container is stopped/remove just run it again with the same volume
```bash
docker run -v feedback:/app/feedback <container_id>

# list all volumes
docker volumes ls
```

### Run commands
```bash
#   -p: port
#   -d: detach  (run in background)
#   -i: interactive
#   -t: terminal
#   --name string: ex --name my_container
#   --rm: remove container once stopped
#   -v: volume_name:path    ex, -v feedback:/app/feedback
```

## Stop Container
```bash
docker stop <container_id>
docker stop <container_name>
```

## List running containers
```bash
docker ps

# List previous containers as well
docker ps -a
```

## Delete Container
```bash
docker rm <container_id>

# Automatically delete container after exit
docker run --rm <container_id>
```

## Copying to/from a container
```bash
docker cp <container_id>:/path/to/file path/on/local/disk
```

# Docker Logs
The view and debug containers
```bash
docker logs <container_name>
```

# Dockerfile

```docker
FROM baseImage

WORKDIR /the/workdir/path

COPY source dest

RUN command                 # Runs when image is build, ex npm install, apt install, pip install

COPY source dest

EXPOSE port

CMD [ "executable" ]        # runs when container start
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

# Run docker without sudo

```bash
# Create a docker group
sudo groupadd docker 

# Add your use to the docker group
sudo usermod -aG docker $USER

# restart group or logout/restart
newgrp docker
```