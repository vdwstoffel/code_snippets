"use strict";

const axios = require("axios");
const endpoint =
  "https://react-course-2591d-default-rtdb.europe-west1.firebasedatabase.app/cart.json";

/***************
 ***** GET *****
 ***************/
const getData = async () => {
  try {
    const response = await axios.get(endpoint);
    console.log(response.data);
  } catch (err) {
    console.log(err);
  }
};

/****************
 ***** POST *****
 ****************/
const postData = async () => {
  try {
    await axios.post(endpoint, { hello: "World" });
  } catch (err) {
    console.log(err);
  }
};

/***************
 ***** PUT *****
 ***************/
const putData = async () => {
  try {
    await axios.put(endpoint, { hello: "JavaScript" });
  } catch (err) {
    console.log(err);
  }
};

/******************
 ***** DELETE *****
 ******************/
const deleteData = async () => {
  try {
    await axios.delete(endpoint, { hello: "JavaScript" });
  } catch (err) {
    console.log(err);
  }
};

// postData();
// getData();
// putData();
// deleteData();
