"use strict";

const express = require("express");
const app = express();

app.get("/backend", (req, res) => {
  console.log("reached");
  res.send("Hello API");
});

app.listen(8001, () => {
  console.log(`http://localhost:8001`);
});
