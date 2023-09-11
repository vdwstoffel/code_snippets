# Express

## Express Backend

```bash
npm i express
```

```bash
├── app.js
├── controllers
│   └── users.js
├── models
│   └── userModel.js
```

{% code title="app.js" %}
```javascript
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
```
{% endcode %}

{% code title="/controllers/user.js" %}
```javascript
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
```
{% endcode %}

{% code title="/models/userModel.js" %}
```javascript
"use strict";

class DB {
  getUsers = () => {
    return { user: "Stoffel" };
  };
}

module.exports = DB;
```
{% endcode %}

## Express Frontend

```bash
npm i express
npm i ejs
npm i morgan
```

```bash
.
├── app.js
├── controllers
│   └── users.js
├── models
│   └── userModel.js
├── public
│   └── css
│       └── style.css
└── views
    └── index.ejs
```

app.js

```javascript
/*
npm i express
npm i ejs
npm i morgan
*/

"use strict";

const express = require("express");
const app = express();
const morgan = require("morgan");

// Log the status code of the request
app.use(morgan("dev"));

// Set the view engine to EJS
app.set("view engine", "ejs");

// Set the directory for the views
app.set("views", __dirname + "/views");

// Use the built-in middleware to serve static files from the 'public' directory
app.use(express.static("public"));

// import controllers
const users = require("./controllers/users");

// routes
app.use("/", users);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
```

/controllers/user.js

```javascript
"use strict";

const express = require("express");
const router = express.Router();

// Import db
const DB = require("../models/userModel");
const db = new DB();

router.get("/users", async (req, res) => {
  const data = await db.getUsers();
  res.render("index", { user: "Stoffel" });
});

module.exports = router;

```

/views/index.ejs

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/styles.css"> <!-- the css root will be set to public -->
    <title>Users Example</title>
</head>
<body>
    <h1><%= user %></h1>
</body>
</html>
```

### Post data to server

```html
<form  action="/" method="post">
    <input type="text" name="num1" id="" placeholder="Weight">
    <input type="text" name="num2" placeholder="Height">
	  <button type="submit" name="submit">Calculate</button>
</form>
```

```javascript
const express = require("express");
const app = express();
app.use(express.urlencoded({extended: true}))

app.post("/", (req, res) => {
  const { num1, num2 } = req.body;
});
```

## Route Parameters

```javascript
// Route parameters     http://localhost:3000/parameters/stoffel/walt
app.get('/parameters/:name/:surname', (req, res) => {
    res.send(req.params);
    // {"name":"stoffel","surname":"walt"}
  })
```

## Middleware

```javascript
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
```

## ejs

### Includes

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/styles.css"> <!-- the css root will be set to public -->
    <title><%= title %></title>
</head>
```

```html
<%- include('header') %> <!-- Include any files in this page -->
<body>
    <h1>Welcome to Express</h1>
</body>
</html>
```
