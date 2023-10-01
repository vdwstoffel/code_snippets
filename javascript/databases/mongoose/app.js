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
    await User.create({
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

// find all
const findAll = async () => {
  const query = await User.find();
  console.log(query);
};

const findUser = async (name) => {
  const query = await User.findOne({ username: name });
  console.log(query);
};

const findUnderAge = async (age) => {
  const query = await User.find({ age: { $gte: 1, $lte: 10 } });
  console.log(query);
};

/****************
 ***** UPDATE ****
 *****************/
const findAndUpdate = async (name, age) => {
  const id = await findUserId(name);
  await User.findOneAndUpdate(id, { age: age });
};

const findBynameAndUpdate = async (name) => {
  await User.findOneAndUpdate(
    { username: "Stoffel" },
    { username: "Christoff" }
  );
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

const deleteFiltered = async (ageAbove) => {
  await User.deleteMany({ age: { $gte: ageAbove } });
};

const deleteFilteredByName = async () => {
  await User.deleteMany({ username: /Mav/ });
};

const deleteUserById = async (name) => {
  const id = await findUserId(name);
  await User.findByIdAndDelete(id);
};

/**
 * main
 */
const demoData = [
  { name: "Stoffel", age: 30, hobbies: ["Programming", "Gaming"] },
  { name: "Rits", age: 16, hobbies: ["Sleep", "Snackie"] },
  { name: "Mavis", age: 5, hobbies: ["Play", "Prrrr"] },
  { name: "Lilly", age: 3, hobbies: ["Speed", "Play"] },
];

// demoData.forEach((person) => {
//   createUser(person.name, person.age, person.hobbies)
// })

// findAll()
// findUnderAge(10)
// findBynameAndUpdate("Stoffel");
// findUser("Stoffel");
// deleteFiltered(10)
// deleteFilteredByName()