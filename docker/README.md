# Images

## Build an image

```bash
#   -t: tag
docker build -t my-image:my-tag .

#   -f: path/to/file
docker build -f docker/Dockerfile -t my-image:my-tag .
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

Named volumes in Docker provide a way to manage and persist data outside of a container in a flexible and easy-to-use manner

```bash
docker run -v mydata:/app/data my-image

# list all volumes
docker volumes ls
```

## Bind Mounts

A bind mount in Docker is a method of attaching a specific directory or file from your host machine's filesystem directly into a Docker container. This allows the container to access and modify the files and directories on the host system as if they were part of the container's own filesystem.

```bash
docker run -v /path/on/host:/path/in/container my-image

# append an extra :ro to make bind mount readonly
docker run -v /path/on/host:/path/in/container:ro my-image
```

### Web Specific

`-v /path/on/host:/path/in/container` : Where to store generate files

`-v full/file/path:/workdir_in_dockerfile` : This allows local file changes to reflect in the container

`-v /workdir/node_modules` : node_modules to prevent the copy from, overwriting it

```bash
docker run -d --rm -p 3000:3000 --name some_name -v /path/on/host:/path/in/container -v full/file/path:/workdir -v /workdir/node_modules my-image
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

# Remove all unused containers
docker container prune
```

## Copying to/from a container

```bash
docker cp <container_id>:/path/to/file path/on/local/disk
```

# Networks

Docker networks provide isolated and organized communication channels between containers, enhancing security and enabling efficient data exchange within Docker environments.

```bash
# First create a network
docker network create my-example

# Then run your images with --network
docker run --network my-example my-images:my-tag
```

## Node/MongoDB example

```javascript
// connect to mongo using the container name
const mongo = "mongodb://my-app-mongo:27017/dbName";
```

```bash
# run mongo container. Name should match the connection in the node app
docker run -d --name my-app-mongo --network node-mongo-example mongo:latest

# run node app
docker run -d -p 3000:3000 --network node-mongo-example my-image:my-tag
```

## Express/React example

<figcaption>package.json

```json
"proxy": "http://container-name:<express-port>",
```

<figcaption>App.jsx

```javascript
const response = await fetch("http://localhost:<react-port>/goals");
```

## Connect to a container on your host machine

Ex .When connecting a container to a local db

```bash
docker run -d -p 3000:3000 --network="host" my-image:my-tag
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

VOLUME ["path/to/file"]     # add if you need anonymous volumes

CMD [ "executable" ]        # runs when container start
```

## Variables in docker file

```docker
ENV PORT 80                 # Add env variables
EXPOSE $PORT
```

## .env files

```bash
docker run --env-file ./.env
```

## Arguments

```docker
ARG DEFAULT_PORT=80
ENV PORT $DEFAULT_PORT
```

```bash
# to change the port during build
docker build -t my-images:my-tag --build-arg DEFAULT_PORT=8080
```

## .dockerignore

Files/Folder to ignore

```Dockerfile
node_module/
Dockerfile
.git
.venv
```
