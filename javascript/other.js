"use strict";

/*
A Collection of useful modules
*/ 

/***************
***** UUID *****
****************/
/* To create a random UUID... */ 
const { v4: uuidv4 } = require('uuid');         // npm install uuid
console.log(uuidv4()); // b8dff6a8-e942-417f-ade7-b62479d47c85

/*****************
***** Bcrypt *****
******************/
/* A library to help you hash passwords. */
const bcrypt = require("bcrypt");               // npm i bcrypt

const saltRounds = 12;
const myPassword = "Stoffel";

const storePassword = async () => {
  const hashedPW = await bcrypt.hash(myPassword, saltRounds);
  return hashedPW;
};

const checkPassword = async (plain, hash) => {
  const result = await bcrypt.compare(plain, hash);
  return result;
};

storePassword().then((hashedPW) => {
  console.log(hashedPW);
  checkPassword(myPassword, hashedPW).then((result) => {
    console.log(result);
  });
});

/*****************
***** dotenv *****
******************/
/*  module that loads environment variables
*   Create a .env file in the root of your project
*   S3_BUCKET="YOURS3BUCKET"
*   console.log(process.env)
*/
require('dotenv').config();                  // npm i dotenv       
