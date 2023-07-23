"use strict";

const { Client } = require("pg"); // npm i pg
require("dotenv").config({ path: "../.env" }); // npm i dotenv

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

const test = new User();
test.insertUser("Mavis", 3);
test.getUser("Stoffel").then((res) => console.log(res));
