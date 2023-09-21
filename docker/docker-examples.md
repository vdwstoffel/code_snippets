# Node Example (with nodemon)

```docker
FROM node

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
```

{% code title="package.json" %}
```json
"scripts": {
    "start": "nodemon app.js"
  },
"devDependencies": {
    "nodemon": "^2.0.4"
  }
```
{% endcode %}

```yaml
version: '3.8'
services:
    server:
        container_name: server
        build:
        context: ./server
        dockerfile: ./docker/Dockerfile
        ports:
        - "3001:3001"
        volumes:
        - ./server:/app
        - /app/node_modules/
        env_file:
        - .env
        depends_on:
        - database
```

# Postgresql Example

```yaml
version: '3.8'
services:

  database:
    image: postgres
    restart: always
    container_name: database
    env_file:
      - ./.env
    ports:
      - '5432:5432'
    volumes:
      - dailySports:/var/lib/postgresql/data
```

{% code title=".env" %}
```plaintext
POSTGRES_DB="daily_sports"
POSTGRES_USER="stoffel"
POSTGRES_PASSWORD="StoffelJossie"
POSTGRES_HOST="database"
```
{% endcode %}