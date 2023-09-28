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

# Mongo Example

{% code title="docker-compose.yaml %}

```yaml
version: '3.8'
services:

  mongodb:
    image: 'mongo'
    container_name: mongodb:dev   # set a name for container
    volumes:
      - compose_example:/data/db
    # environment:
      # - MONGODB_USERNAME=stoffel
      # - MONGODB_PASSWORD=secret
    env_file:
      - ./.env
```

{% endcode %}

{% code title="model.js"%}
```javascript
// @mongodb represents the container name
mongoose.connect(
  `mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@mongodb:27017/db-name?authSource=admin`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.error('FAILED TO CONNECT TO MONGODB');
      console.error(err);
    } else {
      console.log('CONNECTED TO MONGODB!!');
      app.listen(80);
    }
  }
);
```
{% endcode %}

{% code title=".env"%}

```plaintext
MONGODB_USERNAME='stoffel'
MONGODB_PASSWORD='secret'
```
{% endcode %}