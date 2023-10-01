"use strict";

const mongoose = require("mongoose");
const User = require("./userModel");

mongoose
  .connect("mongodb://127.0.0.1:27017/demoApp")
  .then((res) => console.log("Connected!"))
  .catch((err) => console.log(err));

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
  const query = await User.find();
  console.log(query);
};

const findUser = async (name) => {
  const query = await User.findOne({ username: name });
  console.log(query);
};

/****************
 ***** UPDATE ****
 *****************/
const findAndUpdate = async (name, age) => {
  const id = await findUserId(name);
  await User.findOneAndUpdate(id, { age: age });
};

/*****************
 ***** DELETE *****
 ******************/
const deleteAll = async () => {
  await User.deleteMany();
};

const deleteUser = async (name) => {
  await User.deleteOne({ username: name });
};

const deleteUserById = async (name) => {
  const id = await findUserId(name);
  await User.findByIdAndDelete(id);
};
