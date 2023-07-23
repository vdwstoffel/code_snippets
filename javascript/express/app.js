/*
Express.js examples


npm i express       https://www.npmjs.com/package/express
npm i ejs           https://www.npmjs.com/package/ejs
*/

"use strict";

const express = require("express");
const app = express();

// Set the view engine to EJS
app.set("view engine", "ejs");

// Set the directory for the views
app.set("views", __dirname + "/views");

// .use runs on every request
// Use the built-in middleware to serve static files from the 'public' directory
app.use(express.static("public"));

// Define routes
app.get("/", (req, res) => {
  res.render("index", { title: "Home" }); // variables passed as an object can be used in .ejs files
});

// Route parameters     http://localhost:3000/parameters/stoffel/walt
app.get("/parameters/:name/:surname", (req, res) => {
  res.send(req.params);
  // {"name":"stoffel","surname":"walt"}
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
