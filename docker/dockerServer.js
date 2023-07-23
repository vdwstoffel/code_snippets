"use strict";

/* 
A simple server that will be run inside a Docker container.
*/

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World from Docker!");
});

const port = process.env.PORT || 8000
app.listen(port, () => {
  console.log(`https://localhost:${port}`);
});
