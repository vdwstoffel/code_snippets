"use strict";

const { Client } = require("pg");               // npm i pg
require("dotenv").config({path: '../.env'});    // npm i dotenv

class Database {
  constructor() {
    (this.database = process.env.DATABASE),
      (this.host = process.env.HOST),
      (this.user = process.env.USER),
      (this.password = process.env.PASSWORD);
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
}

const test = new Database();
test.getUser("stoffel").then(res => console.log(res));
