# Express Backend

```bash
npm i express
```

```bash
├── app.js
├── controllers
│   └── users.js
├── models
│   └── userModel.js
├── package-lock.json
└── package.json
```

<figcaption>app.js

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

<figcaption>/controllers/user.js

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

<figcaption>/models/userModels.js

```javascript
"use strict";

class DB {
  getUsers = () => {
    return { user: "Stoffel" };
  };
}

module.exports = DB;
```

# Express Frontend

```bash
npm i express
npm i ejs
```

```bash
.
├── app.js
├── controllers
│   └── users.js
├── models
│   └── userModel.js
├── package-lock.json
├── package.json
├── public
│   └── css
│       └── style.css
└── views
    └── index.ejs
```

<figcaption>app.js

```javascript
/*
npm i express
npm i ejs
*/

"use strict";

const express = require("express");
const app = express();

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

<figcaption>/cotrollers/user.js

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

<figcaption>/views/index.ejs

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
