/*
npm i express       https://www.npmjs.com/package/express
npm i morgan        https://www.npmjs.com/package/morgan
*/

const express = require("express");
const app = express();

const morgan = require("morgan");
// Log the status code of the request
app.use(morgan("dev"));

/*******************************************
 *****  Run middleware on each request *****
 *******************************************/
const addDate = (req, res, next) => {
  req.addDate = new Date().toISOString();
  next(); // call next middleware. If no next, the request will hang
};
app.use(addDate); // add the middleware to each request

app.get("/", (req, res) => {
  res.send(req.addDate); //send the date that was assigned with the middleware
});

/***********************************************************
 *****  Use this middleware on each particular request *****
 ***********************************************************/
app.use("/api", (req, res, next) => {
  console.log("Api route used");
  next(); // call next middleware. If no next, the request will hang
});

app.get("/api", addDate, (req, res) => {
  res.send({ route: "api", date: req.addDate });
});

/*****************************************
 ***** Middleware on Specific Routes *****
 *****************************************/
const protect = (req, res, next) => {
  console.log("This route is protected");
  next(); //  call next middleware. If no next, the request will hang
};

app.get("/secret", protect, (req, res) => {
  res.send("This is a secret route");
});

/*********************************************************
 ***** If none of the routes match run the following *****
 *********************************************************/
app.use((req, res) => {
  res.status(404).send("Not Found");
});

app.listen(3000, () => console.log("http://localhost:3000"));
