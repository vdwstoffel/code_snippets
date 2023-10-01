# PostgreSQL

```bash
npm i pg
npm dotenv
```

```javascript
"use strict";

const { Client } = require("pg"); // npm i pg
require("dotenv").config({ path: "../../.env" }); // npm i dotenv

class Connector {
  constructor() {
    (this.database = process.env.DATABASE),
      (this.host = process.env.HOST),
      (this.user = process.env.DB_USER),
      (this.password = process.env.DB_PASSWORD);
  }

  connectToDatabase = () => {
    /* Establish a connection to the database
       and return a client object */
    const client = new Client({
      host: this.host,
      port: 5432,
      database: this.database,
      user: this.username,
      password: this.password,
      idle_in_transaction_session_timeout: 3,
    });
    return client;
  };
}

class User extends Connector {
  getUser = async (argument) => {
    const client = this.connectToDatabase();
    await client.connect();
    try {
      const query = await client.query(`SELECT * FROM users
                                        WHERE username = '${argument}';`);
      await client.end();
      return query.rows;
    } catch (err) {
      console.log(err);
    }
  };

  insertUser = async (username, age) => {
    const client = this.connectToDatabase();
    await client.connect();
    try {
      await client.query(`INSERT INTO users (username, age)
                          VALUES ('${username}', '${age}');`);
      await client.end();
    } catch (err) {
      console.log(err);
      await client.end();
    }
  };
}
```

# Mongoose

```bash
npm i mongoose
```

{% code title="userModel.js" %}

```javascript
"use strict";

const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const UsersSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    min: [1, "Invalid Age"], // Show a error message if age is less than 1
    max: 99,
  },
  hobbies: [],
});

module.exports = model("User", UsersSchema); // Create and export the schema
```

{% endcode %}

{% code title="app.js" %}

```javascript
"use strict";

const mongoose = require("mongoose");
const User = require("./userModel");

mongoose
  .connect("mongodb://127.0.0.1:27017/demoApp")
  .then((res) => console.log("Connected!"))
  .catch((err) => console.log(err));

const findAll = async () => {
  const query = await User.find();
  console.log(query);
};
```

{% endcode %}

## Create

```javascript
await User.create({
  name: "Stoffel",
  age: 30,
  hobbies: ["Programming", "Gaming"],
});
```

## Find

```javascript
const query = await User.find(); // Find all
const query = await User.find({age: {$gte: 1, $lte: 10}}); // $gte: greate than, $lte: less than 
const query = await User.findOne({ username: name });
```

## Update

```javascript
const id = await findUserId(name);
await User.findOneAndUpdate(id, { age: age });

// username to find, username to update to
await User.findOneAndUpdate({ username: "Stoffel" }, { username: "Christoff" });
```

## Delete

```javascript
await User.deleteMany(); // Delete all
await User.deleteMany({ age: { $gte: ageAbove } });
await User.deleteMany({ username: /Mav/ });

await User.deleteOne({ username: name });

const id = await findUserId(name);
await User.findByIdAndDelete(id);
```
