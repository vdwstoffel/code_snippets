"use strict";

const express = require("express"); // npm i express
const app = express();

// import controllers
const users = require("./controllers/users");

app.use("/", users);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
