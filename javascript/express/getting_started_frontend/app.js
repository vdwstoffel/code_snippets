/*
npm i express
npm i ejs
*/

"use strict";

const express = require("express");
const app = express();

// Set the view engine to EJS
app.set("view engine", "ejs");

// Set the directory for the views
app.set("views", __dirname + "/views");

// Use the built-in middleware to serve static files from the 'public' directory
app.use(express.static("public"));

// import controllers
const users = require("./controllers/users");

// routes
app.use("/", users);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
