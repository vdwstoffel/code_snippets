"use strict";

/*
This file is related to the Authentication Examples
*/

const { Client } = require("pg");

class Database {
  constructor() {
    (this.database = "examples"),
      (this.host = "localhost"),
      (this.user = "stoffel"),
      (this.password = "StoffelJossie");
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

  findUser = async (username, password) => {
    const client = this.connectToDatabase();
    await client.connect();
    try {
      const query = await client.query(`
            SELECT * FROM users
            WHERE username = '${username}';
        `);
      await client.end();
      return query.rows;
    } catch (error) {
      console.log(error);
    }
  };
}

module.exports = Database;
