# Authentication with express example

## Express

```javascript
/*
npm i express
npm i jsonwebtoken
npm i dotenv
npm i cors
*/
"use strict";

const express = require("express");
const app = express();
require("dotenv").config({ path: ".env" });
const jwt = require("jsonwebtoken");
const cors = require("cors");

app.use(cors());
app.use(express.urlencoded({ extended: true })); //make sure a form can send data

const JWT_SECRET = "xxxx";

app.post("/signup", async (req, res) => {
  const { username } = req.body;
  // add database logic to create user/login user
  const token = jwt.sign({ username: username, iat: Date.now() }, JWT_SECRET, {
    expiresIn: 1000 * 60 * 30, // set expiry to 30 min
  });
  res.send({ token });
});

app.get("/viewToken", async (req, res) => {
  /*
   * The token will be sent as Bearer xxxx, so remove the Bearer + <space> part
   */
  const token = req.headers.authorization.replace("Bearer ", "");
  const decodedToken = jwt.verify(token, JWT_SECRET);

  // Match the token expiry date to the current date
  if (decodedToken.exp < Date.now()) {
    console.log("Token Expired");
  }

  res.send(decodedToken);
});

// Start the server
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`http://localhost:${port}`));
```

## React

App.jsx

```javascript
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // npm i react-router-dom

import RootLayout from "./RootLayout";
import Home, { action as authAction } from "./Signup"; // import the action from the signup page
import Secret from "./Secret";
import ViewToken, { loader as getTokenLoader } from "./ViewToken";
import { checkAuthLoader, getAuthToken, logout } from "./auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, // Wrap the root layout and add other pages as children
    id: "root", // id to identify the data from the loader function
    loader: getAuthToken, // get the token on every page load
    children: [
      { index: true, element: <Home />, action: authAction }, // sumbit the form action
      { path: "/secret", element: <Secret />, loader: checkAuthLoader }, // will check on every new component
      { path: "/viewToken", element: <ViewToken />, loader: getTokenLoader },
      { path: "/logout", loader: logout }, // triggers  logout function to remove token
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
```

Signup.jsx

```javascript
import { Form, redirect } from "react-router-dom";
import axios from "axios";

export default function Signup() {
  return (
    <Form method="POST">
      <input type="text" id="username" name="username" />
      {/* name will be used to identify */}
      <button>Submit</button>
    </Form>
  );
}

export async function action({ request }) {
  /*
  Action to be performed once the form is submitted
  add the action to the route as an action ex action: authAction
  */
  const urlParams = new URL(request.url).searchParams; // get any url param queries
  const paramQueries = urlParams.get("query");

  // Get the information from the form submitted
  const data = await request.formData();
  const username = data.get("username"); //taken from the input name

  // Make api call the back end
  const response = await axios.post(
    "http://localhost:8000/signup",
    {
      username: username,
    },
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );
  const resData = response.data;
  localStorage.setItem("token", resData.token); // take the token from response and save it to local storage

  return redirect("/secret");
}
```

auth.js

```javascript
import { redirect } from "react-router-dom";

export function getAuthToken() {
  /**
   * Global loader to check on every component if the user has a valid token
   * Add the to route path
   */
  const token = localStorage.getItem("token");
  return token;
}

export function checkAuthLoader() {
  /**
   * Use to protect routes. IF there is no token present reroute them away
   */
  const token = getAuthToken();

  if (!token) {
    return redirect("/");
  }

  return null;
}

export function logout() {
  /**
   * Function that will remove the token once the user logs out
   */
  localStorage.removeItem("token");

  return redirect("/");
}
```

Secret.jsx

```javascript
import { Link, useRouteLoaderData } from "react-router-dom";

export default function Secret() {
  const user = useRouteLoaderData("root"); // id set in the app route definition. Get access to the data from the loader
  return (
    <>
      <h1>This is a secret</h1>
      <h2>{user}</h2>
      <Link to="/viewToken">View Token</Link>
    </>
  );
}
```

ViewToken.jsx

```javascript
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import { getAuthToken } from "./auth";

export default function ViewToken() {
  const data = useLoaderData();

  // Convert unix time to normal timestamp
  const convertTime = (unixTime) => {
    const date = new Date(unixTime);
    return (
      date.getDate() +
      "/" +
      date.getMonth() +
      "/" +
      date.getFullYear() +
      " " +
      date.getHours() +
      ":" +
      date.getMinutes() +
      ":" +
      date.getSeconds()
    );
  };

  // check if the token is expired
  if (data.data.exp < Date.now()) {
    console.log("Token Expired");
    localStorage.removeItem("token");
  }

  return (
    <>
      <h1>Username: {data.data.username}</h1>
      <h1>Issued At: {convertTime(data.data.iat)}</h1>
      <h1>Expires: {convertTime(data.data.exp)}</h1>
    </>
  );
}

export async function loader() {
  const token = getAuthToken();
  const response = await axios.get("http://localhost:8000/viewToken", {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
  return response;
}
```