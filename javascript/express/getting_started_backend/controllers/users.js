"use strict";

const express = require("express");
const router = express.Router();

// Import db
const DB = require("../models/userModel");
const db = new DB();

router.get("/users", async (req, res) => {
  const data = await db.getUsers();
  res.send(data);
});

module.exports = router;
