/*
npm i express           https://www.npmjs.com/package/express
npm i ejs               https://www.npmjs.com/package/ejs
npm i express-session   https://www.npmjs.com/package/express-session
*/
"use strict";

const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true })); //make sure a form can send data
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

/**********************************
 ***** Authentication Example *****
 **********************************/
const AuthExampleModel = require("./models/AuthExampleModel");
const db = new AuthExampleModel();
const session = require("express-session");
app.use(session({ secret: "XXXXXX", cookie: { maxAge: 60000 * 60 * 24 * 7 } }));

/* 
  A middleware to check if a user is logged in.
  If the user is not logged in redirect to the login page.
*/
const requireLogin = (req, res, next) => {
  if (!req.session.user_id) {
    return res.redirect("/authentication/login");
  }
  next();
};

// Login Page
app.get("/authentication/login", (req, res) => {
  res.render("Login");
});

// Post to verify login details
app.post("/authentication/login", async (req, res) => {
  const { username, password } = req.body; // get the username and password from the form
  const user = await db.findUser(username); // find the user in the database

  // use a try block for incase the user does not exist
  try {
    if (user[0].password === password) {
      req.session.user_id = user[0].user_id; // store the user_id in the session
    }
  } catch (error) {
    // flash an error to the user
  }

  res.redirect("/authentication/result");
});

// Load the page after authentication
app.get(
  "/authentication/result",
  requireLogin,
  /* if there was a successful login the cookie will be stored in the browser */
  (req, res) => {
    const session = req.session.user_id; // if there is a user_id in the session return true
    res.render("LoginSuccess", { loggedIn: session });
  }
);

// Make sure we can logout
app.post("/authentication/logout", (req, res) => {
  /* Explicitly set the cookie to null to prevent showing auth pages */
  req.session.user_id = null;
  res.redirect("/authentication/login");
});

/******* Authentication Example *******/

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
