# React

## Getting Started

```bash
# Create React App
npx create-react-app my-app
cd my-app
npm start

# Vite
npm create vite@latest
cd my-app
npm run dev
```

## Components

### Functional Components

```javascript
import "./global.css";

export default function App() {
  return (
    <>
      <h1>Hello World</h1>
      <p>From React</p>
    </>
  );
}
```

### Class Based Components

```javascript
import React from "react";

class setStateExample extends React.Component {
  state = {
    isOn: false,
  };

  // By using arrow functions is will automatically bind it to this
  powerSwitch = () => {
    if (!this.state.isOn) {
      this.setState({ isOn: true }); // Use setState to change objects
    } else {
      this.setState({ isOn: false });
    }
  };

  render() {
    return (
      <div>
        <h1>{this.state.isOn ? "Power on" : "Power off"}</h1>
        <button onClick={this.powerSwitch}>Set Power</button>
      </div>
    );
  }
}

export default setStateExample;
```

## Fragments

```javascript
import { Fragment } from "react";

/*
Instead of wrapping everything in a div and creating a lot of divs
instead wrap your return in a Fragment which just return the props.children.
This will avoid creating a lot of divs
*/

export default function FragmentExample() {
  return (
    <Fragment>
      <h1>Hello</h1>
      <h1>World</h1>
    </Fragment>
  );
}
```

## Props

PropsExample.jsx

```javascript
export default function PropsExample(props) {
  const { name, surname } = props;
  return (
    <p>
      Hello {name} {surname}
    </p>
  );
}
```

App.jsx

```javascript
import PropsExample from "./PropsExample";

export default function App() {
  return <PropsExample name="Christoff" surname="van der Walt" />;
}
```

## Conditionals

```javascript
export default function App() {
  const day = false;
  return <h1>{day ? "It is day" : "it is night"}</h1>;
}
```

## Loops

```javascript
export default function App() {
  const fruits = ["banana", "maça", "laranja"];

  return (
    <div>
      <h1>Fruits</h1>
      {fruits.map((fruit, idx) => (
        <p key={idx}>{fruit}</p>
      ))}
    </div>
  );
}
```

## UseState

`useState` is a React hook that allows functional components to manage and update state.

```javascript
import { useState } from "react";

export default function App() {
  // destruct array         // Set initial value
  const [count, setCount] = useState(1);

  function increase() {
    const newCount = count + 1;
    setCount(newCount); // Set a new value
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
    </div>
  );
}
```

## UseEffect

`useEffect` is a React hook that enables functional components to perform side effects, such as data fetching or DOM manipulation, after rendering.

```javascript
import { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("https://swapi.dev/api/films/1/");
      setResults(res.data);
    };
    getData();
  }, []); // use callback array to run only when given argument changes

  return (
    <div>
      <h1>{results.title} </h1>
    </div>
  );
}
```

## useRef

`useRef` is a React hook used to create a mutable reference that persists across renders and can be used to interact with DOM elements or store values without causing re-renders.

```javascript
import { useRef } from "react";

/*
Instead of giving state to an input give a reference to it
 */

function App() {
  const nameInputRef = useRef();

  const clickerHandler = (e) => {
    e.preventDefault();
    console.log(nameInputRef.current.value); // get the value without using state
    nameInputRef.current.value = ""; // usually you should not change DOM values yourself
  };

  return (
    <>
      <form onSubmit={clickerHandler}>
        <input type="text" ref={nameInputRef}></input> {/* identify by ref */}
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
```

## useReducer

`useReducer` is a React hook that manages complex state logic by dispatching actions to a reducer function, allowing components to update state in a more organized and predictable manner.

```javascript
import { useReducer } from "react";

export default function App() {
  // reducer function that will be used for the useReducer hook
  const reducerFn = (state, action) => {
    // takes a object as action argument
    if (action.type === "increase") {
      return (state += 1); // should return a new state
    } else {
      return state + -1;
    }
  };

  // const [stateSnapshot, func_to_dispatch_new_action] = useReducer(triggeredFunction, initialState)
  const [counter, dispatch] = useReducer(reducerFn, 0); // useReducer hook with the reducer function

  const increase = () => {
    dispatch({ type: "increase" });
  };

  const decrease = () => {
    dispatch({ type: "decrease" });
  };

  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </>
  );
}
```

## useContext

`useContext` is a React hook that allows components to access shared data or values from a parent component's context without the need for prop drilling.

/context/auth-context.jsx

```javascript
import { createContext, useState } from "react";

const AuthContext = createContext({
  isLoggedIn: false,
  login: () => {}, // placeholder functions
  logout: () => {}, // placeholder functions
});

export function AuthContextProvider(props) {
  const [isAuth, setIsAuth] = useState(false);

  const login = () => {
    setIsAuth(true);
  };

  const logout = () => {
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isAuth, login: login, logout: logout }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

// Export the auth context
export default AuthContext;
```

App.jsx

```javascript
import { useContext } from "react";
import AuthContext from "./context/auth-context";

export default function App() {
  const { isLoggedIn, login, logout } = useContext(AuthContext);

  return (
    <div>
      <h1>Logged In: {isLoggedIn ? "Yes" : "No"} </h1>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
```

main.jsx

```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AuthContextProvider } from "./context/auth-context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Wrap app in the context provider */}
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);
```

## Custom Hooks

/hooks/useToggler.jsx

```javascript
import { useState } from "react";

/* By convention prefix class with use */
export default function useToggler(value = false) {
  const [isOn, setIsOn] = useState(value); // set initial values with useState

  const toggle = () => {
    setIsOn(!isOn);
  }; // set the value is the opposite of what it is

  return [isOn, toggle]; // return the value and the toggle function
}
```

App.jsx

```javascript
import useToggler from "./hooks/useToggler";

export default function App() {
  const [btnOne, setBtnOne] = useToggler(false); // value , toggle function
  const [btnTwo, setBtnTwo] = useToggler(false); // value , toggle function

  return (
    <div>
      <h onClick={setBtnOne}>Button 1 is {btnOne ? "On" : "Off"}</h>
      <br />
      <h onClick={setBtnTwo}>Button 2 is {btnTwo ? "On" : "Off"}</h>
    </div>
  );
}
```

## Router

```bash
npm i react-router-dom
```

MainNavigation.jsx

```javascript
import { Link } from "react-router-dom";

export default function MainNavigation() {
  return (
    <header>
      <p>
        <Link to="/">Home </Link>
      </p>{/* Not home component just a link*/}
      <p>
        <Link to="Products">Products</Link>
      </p>
    </header>
  );
}
```

RootLayout.jsx

```javascript
import { Outlet } from "react-router-dom";
import MainNavigation from "./MainNavigation";

export default function RootLayout() {
  return (
    <>
      <MainNavigation /> {/* Add a navigation header */}
      <Outlet /> {/* Display all child pages */}
    </>
  );
}
```

App.jsx

```javascript
import "./global.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom"; // npm i react-router-dom

import RootLayout from "./RootLayout";
import Home from "./Home";
import Products from "./Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, // Wrap the root layout and add other pages as children
    // errorElement: <ErrorPage />, // if page does not exists show a define error page
    children: [
      { index: true, element: <Home /> },
      { path: "/products", element: <Products /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
```

Home.jsx

```javascript
export default function Home() {
  return <h1>Welcome Home</h1>;
}
```

Products.jsx

```javascript
export default function Products() {
  return <h1>This is the Products page</h1>;
}
```

### Dynamic Router

App.jsx

```javascript
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // npm i react-router-dom

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, // Wrap the root layout and add other pages as children
    children: [
      { path: "/products", element: <Products /> },
      { path: "products/:id", element: <ProductItems /> }, // dynamic routing
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
```

ProductItems.jsx

```javascript
import { useParams } from "react-router-dom";

export default function ProductItems() {
  const params = useParams();

  return (
    <>
      <h1>Product: {params.id}</h1>{/* params.id must match the dynamic route */}
    </>
  );
}
```

### useNavigate

Home.jsx

```javascript
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/products"); // programmatically go to another page
  };

  return (
    <div>
      <h1>Welcome Home</h1>
      <button onClick={clickHandler}>Go To Products</button>
    </div>
  );
}
```

### Link

```javascript
import { Link } from "react-router-dom";

export default function Page() {
  return (<Link to="/toPage">To Page</Link>
  );
}
```

### Navlink

```javascript
import { NavLink } from 'react-router-dom';

export default function App() {
  return <Navlink to="/">Home</Navlink>
}

```

### useLoaderData

Load the data before the page loads and pass the data to the page

App.jsx

```javascript
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Content, { loader as eventLoader } from "./Content"; // import the loader function

const router = createBrowserRouter([
  { path: "/", element: <Content />, loader: eventLoader }, // call the loader function before the page loads
]);

export default function App() {
  return <RouterProvider router={router} />;
}
```

Content.jsx

```javascript
import { useLoaderData } from "react-router-dom";

export default function Content() {
  const data = useLoaderData(); // Gain access to the data from the api call

  return <h1>{data.name}</h1>;
}

/*
 * Loader function, declare as a export function with the component it will use
 * and export it to the routes
 */
export async function loader() {
  const response = await fetch("https://swapi.dev/api/people/1/");
  return await response;
}
```

#### useLoaderData Dynamic Routing

Content.jsx

```javascript
import { useLoaderData } from "react-router-dom";

export default function Content() {
  const data = useLoaderData(); // Gain access to the data from the api call

  return <h1>{data.name}</h1>;
}

/*
 * Loader function, declare as a export function with the component it will use
 * and export it to the routes
 */
export async function loader({ request, params }) {
  const num = params.number; // should match the dynamic param from the path ex.  path: "/:number"
  const response = await fetch(`https://swapi.dev/api/people/${num}/`);
  return await response;
}
```

App.jsx

```javascript
import "./global.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Content, { loader as eventLoader } from "./Content"; // import the loader function

const router = createBrowserRouter([
  { path: "/:number", element: <Content />, loader: eventLoader }, // call the loader function before the page loads
]);

export default function App() {
  return <RouterProvider router={router} />;
}
```

### useRouterError

Create a custom error component and send error to it. Whenever an error occurs react will find the closest errorElement

App.jsx

```javascript
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Content, { loader as eventLoader } from "./Content"; // import the loader function
import Error from "./Error";

const router = createBrowserRouter([
  {
    path: "/content",
    element: <Content />,
    loader: eventLoader,
    errorElement: <Error />,
  }, //add default error handler
]);

export default function App() {
  return <RouterProvider router={router} />;
}
```

Content.jsx

```javascript
import { useLoaderData, json } from "react-router-dom";

export default function Content() {
  const data = useLoaderData(); // Gain access to the data from the api call

  return <h1>{data.name}</h1>;
}

/*
 * Loader function, declare as a export function with the component it will use
 * and export it to the routes
 */
export async function loader() {
  const response = await fetch("https://swapi.dev/api/wrong_peope/1/"); // notice wrong api url
  if (!response.ok) {
    throw json({ message: "Could not fetch data" }, { status: 400 }); // creates a response object
  } // will direct to the error page
  return await response;
}
```

Error.jsx

```javascript
import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError(); // gain access to thew error object

  return (
    <>
      <h1>{error.status}</h1>
      <h2>{error.data.message}</h2>
    </>
  );
}
```

### useSearchParam

The useSearchParams hook is used in React Router to access and manage the query parameters of the current URL, allowing components to read and update the search parameters in the browser's address bar.

App.jsx

```javascript
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Content from "./Content";

const router = createBrowserRouter([
  { path: "/content", element: <Content /> },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
```

Content.jsx

```javascript
import { useSearchParams } from "react-router-dom";

export default function Products() {
  // get everything in the params ex localhost/products?bread
  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <div>
      <h1>{searchParams}</h1>
    </div>
  );
}
```

### userRouterLoaderData

This hook makes the data at any currently rendered route available anywhere in the tree

App.jsx

```javascript
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // npm i react-router-dom

import User from "./User";
import { getUsername } from "./getUsername"; // custom function

const router = createBrowserRouter([
  {
    path: "/",
    element: <User />,
    loader: getUsername, // loader function to share data with other components
    id: "root", // set a id to refer to the data
    children: [{ index: true, element: <User /> }],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
```

User.jsx

```javascript
import { useRouteLoaderData } from "react-router-dom";

export default function User() {
  const user = useRouteLoaderData("root"); // id set in the app route definition

  return <h1>Hello: {user}</h1>;
}
```

getUsername.js

```javascript
export function getUsername() {
  return "Stoffel";
}
```

### Router Forms

App.jsx

```javascript
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // npm i react-router-dom

import UserForm, { action as submitAction } from "./UserForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserForm />,
    action: submitAction, // action to be performed upon submit click
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
```

UserForm.jsx

```javascript
import { Form, redirect } from "react-router-dom";

export default function UserForm() {
  return (
    <Form method="POST">
      <h1>Hello</h1>
      <label>Name</label>
      <input type="text" id="name" name="name" />{/* name will be used to identify in the action*/}
      <button>Submit</button>
    </Form>
  );
}

// action function to capture event data
export async function action({ request, params }) {
  const data = await request.formData();
  const userData = {
    username: data.get("name"), //the name attr from the input
  };

  console.log(userData);
  // post request with data

  return redirect("/"); //redirect to any defined route
}
```

### Delete Request

App.jsx

```javascript
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // npm i react-router-dom

import UserForm, { action as submitAction } from "./UserForm";

const router = createBrowserRouter([
  {
    path: "/:event",
    element: <UserForm />,
    action: submitAction, // action to be performed upon submit click
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
```

UserForm.jsx

```javascript
import { redirect, useSubmit } from "react-router-dom";

export default function UserForm() {
  const submit = useSubmit();

  const deleteHandler = () => {
    submit(null, { method: "delete" }); // define the method to be used
  };

  return (
    <>
      <button onClick={deleteHandler}>Delete</button>{" "}
      {/* Not part of the form */}
    </>
  );
}

// action function to capture event data
export async function action({ request, params }) {
  const data = await params.event; // should match the dynamic param in App ex path: "/:event"
  console.log(request.method); // get access to the method
  // post request with data

  return redirect("/event"); //redirect to any defiend route
}
```

## Forms

App.jsx

```javascript
import { useState } from "react";

import useFormInput from "./useFormInput";

export default function App() {
  const [username, handleUsernameSubmit, usernameReset] = useFormInput(); // Custom hook to manage form input
  const [email, handleEmailSubmit, emailReset] = useFormInput();

  const [name, setName] = useState(""); // useState hook to manage state
  const [mail, setMail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setName(username); // set the state to the form value
    setMail(email);
    usernameReset(); // reset values
    emailReset();

    // API call
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Hello {name}</h1>
      <h1>Email {mail}</h1>
      <label>Name:</label>
      <input value={username || ""} onChange={handleUsernameSubmit} />
      <label>Email:</label>
      <input value={email || ""} onChange={handleEmailSubmit} />
      <button type="submit">Submit</button>
    </form>
  );
}
```

useFormInput.jsx

```javascript
import { useState } from "react";

export default function useFormInput(initialValue) {
  // Custom hook to manage form input
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const reset = () => {
    setValue("");
  };

  return [value, handleChange, reset];
}
```

### Frontend Form Validation

App.jsx

```javascript
import { useState } from "react";
import style from "./App.module.css";

export default function App() {
  const [name, setName] = useState(""); // State for the name form input
  const nameIsValid = name.length > 0; // Check is name meets the requirement

  const submitHandler = (e) => {
    e.preventDefault();
    if (!name) {
      console.log("Name is Empty");
      // do something is form is bad
      return;
    }
    // do something is form is good
    window.location.href = "https://google.com";
  };

  const updateInput = (e) => {
    setName(e.target.value);
  };

  return (
    <form>
      <h1>Hello</h1>
      <label>Name:</label>
      <input
        value={name}
        onChange={updateInput}
        className={!nameIsValid ? style.error : null}
      />
      {!nameIsValid && <p>Name is required</p>}
      <button type="submit" onClick={submitHandler}>
        Submit
      </button>
    </form>
  );
}
```

App.module.css

```css
.error {
  border-color: red;
}
```

## Passing Data to Parent Prop

App.jsx

```javascript
import { useState } from "react";

import Names from "./Names";

export default function App() {
  const [names, setNames] = useState([]);

  const addName = (name) => {
    setNames([...names, name]);
  };

  return (
    <div>
      <h1>List of Names</h1>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      <Names addNameFunction={addName} />
    </div>
  );
}
```

Names.jsx

```javascript
import { useState } from "react";

export default function Names(props) {
  const { addNameFunction } = props;
  const [username, setUsername] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the page from refreshing
    addNameFunction(username); // Call the parent function
    setUsername(""); // Empty the input after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```

## Portals

App.jsx

```javascript
import ReactDOM from "react-dom";

/*
By creating a id in the .html you can move the portal to that id instead of the root
This can move it to the top to make semantics better
*/

export default function App() {
  // Pass the element and the id as arguments
  return ReactDOM.createPortal(
    <h1>This is a Portal at the top of the DOM</h1>,
    document.getElementById("portalExample")
  );
}
```

index.html

```html
<body>
  <div id="portalExample"></div>
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"></script>
</body>
```

## React Redux

```bash
npm i @reduxjs/toolkit
npm i react-redux
```

```
├── App.jsx
├── main.jsx
└── store
├── counterSlice.jsx
└── store.jsx
```

main.jsx

```javascript
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux"; // npm i react-redux

import App from "./App";
import store from "./store/store"; // import the redux store

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // assign the store value
  <Provider store={store}>
    <App />
  </Provider>
);
```

App.jsx

```javascript
import { useSelector, useDispatch } from "react-redux";
import { counterAction } from "./store/counterSlice";

export default function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counterSlicer.counter); // state.configureStoreExport.stateItem
  const showCounter = useSelector((state) => state.counterSlicer.showCounter);

  const increaseHandler = () => {
    dispatch(counterAction.increment());
  };

  const decreaseHandler = () => {
    dispatch(counterAction.decrement({ amount: 2 })); // specify a payload by name
  };

  const toggleCounter = () => {
    dispatch(counterAction.toggleCounter(!showCounter));
  };

  return (
    <div>
      <h1>Redux Example</h1>
      {showCounter ? <h2>Counter : {counter} </h2> : null}
      <button onClick={increaseHandler}>Increase</button>
      <button onClick={decreaseHandler}>Decrease</button>
      <button onClick={toggleCounter}>Toggle Show</button>
    </div>
  );
}
```

/store/counterslice.jsx

```javascript
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: "counterSlice", // identifying alias
  initialState: initialState,
  // Set reducer actions
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state, action) {
      // passing a payload. will be dispatched as .func({amount: 2})
      state.counter = state.counter - action.payload.amount;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterAction = counterSlice.actions; // export to component
export default counterSlice; // export to store
```

/store/store.jsx

```javascript
import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "./counterSlice";

const store = configureStore({
  reducer: { counterSlicer: counterSlice.reducer },
});

export default store; // will be imported in main as a Wrapper for the app

/*
 * When you have multiple stores add it to the configure store's reducer in key/value pairs ex.
 *   const store = configureStore({
 *       reducer: { counterSlicer: counterSlice.reducer, auth: authSlice.reducer },
 *   });
 */
```

## Scoping CSS

App.jsx

```javascript
import { useState } from "react";

// Name the .css file as a module and import as styles
import styles from "./App.module.css";

export default function App() {
  const [clicked, setClicked] = useState(false);

  const clickHandler = () => {
    setClicked(!clicked);
  };

  /*
  Call the class name from the styles module
  Dynamically add the class 'dynamic-bg' based on weather or not the state is clicked
  */
  return (
    <div>
      <h1 className={styles.heading} onClick={clickHandler}>
        Css Modules Example
      </h1>
      <div className={clicked && styles["dynamic-bg"]} onClick={clickHandler}>
        Click Me
      </div>
      <h2 className={`${styles.heading} ${clicked && styles["dynamic-bg"]}`}>
        Combined
      </h2>
    </div>
  );
}
```

App.module.css

```css
.heading {
  color: Black;
  font-size: 4em;
}

.heading:hover {
  color: red;
}

.dynamic-bg {
  background-color: yellowgreen;
}

/* Media queries works the same way */
@media (max-width: 1000px) {
  .dynamic-bg {
    background-color: red;
  }
}
```

## Authentication with express example

### Express

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

### React

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

## Vite: Change Default Port

vite.config.js

```javascript
// vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 8000,
    host: true, // needed for docker
  },
});
```

## Various

### Timeout on input changes

```javascript
useEffect(() => {
  /*
  Instead of checking each button press, check after 1 sec of inactivity
  If another button is pressed the current timer will reset 
  */
  const currentTimer = setTimeout(() => {
    setFormIsValid(
      enteredEmail.includes("@") && enteredPassword.trim().length > 6
    );
  }, 1000);
});
```

### Show current link page

```javascript
<NavLink
    to="/"
    className={({ isActive }) => (isActive ? style.active : undefined)} // className takes an function
    end // Match only exact path name
>
```

## Extensions

[React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)

[Redux Dev Tools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd/related)
