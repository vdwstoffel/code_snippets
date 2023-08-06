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
```javascript
"use strict";

const mongoose = require("mongoose");     // npm install mongoose
const { Schema, model } = mongoose;

// Connect to database
mongoose
  .connect("mongodb://localhost/code_snippets")
  .then((res) => console.log("Connection Successfull"))
  .catch((err) => console.log("Connection Failed"));

/*******************
 ***** SCHEMAS *****
 *******************/
/* Create a new Schema with validation */
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

// Compile Model
const Users = model("Users", UsersSchema);

/*******************
 ****** CREATE *****
 *******************/
const createUser = async (name, age, hobbies) => {
  try {
    await Users.create({
      username: name,
      age: age,
      hobbies: hobbies,
    });
  } catch (err) {
    console.log(err);
  }
};

/***************
 ***** FIND *****
 ****************/
const findAll = async () => {
  const query = await Users.find();
  console.log(query);
};

const findUserId = async (name) => {
  const query = await Users.findOne({ username: name });
  return query._id;
};

/****************
 ***** UPDATE ****
 *****************/
const updateUser = async (name, age, hobbies) => {
  await Users.updateOne({
    username: name,
    age: age,
    hobbies: hobbies,
  });
};

const findAndUpdate = async (name, age) => {
  const id = await findUserId(name);
  await Users.findOneAndUpdate(id, { age: age });
};

/*****************
 ***** DELETE *****
 ******************/
const deleteAll = async () => {
  await Users.deleteMany();
};

const deleteUser = async (name) => {
  await Users.deleteOne({ username: name });
};

const deleteUserById = async (name) => {
  const id = await findUserId(name);
  await Users.findByIdAndDelete(id);
};

/********************
 ***** RELATIONS ****
 ********************/
const authorSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: "Author" },
});

const Author = mongoose.model("Author", authorSchema);
const Post = mongoose.model("Post", postSchema);
```