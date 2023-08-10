# Getting Started

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

# Components

## Functional Components

```javascript
import './global.css'

export default function App() {
  return (
    <>
      <h1>Hello World</h1>
      <p>From React</p>
    </>
  );
}
```

## Class Based Components

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

# Props

<figcaption>PropsExample.jsx

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

<figcaption>App.jsx

```javascript
import PropsExample from "./PropsExample";

export default function App() {
  return <PropsExample name="Christoff" surname="van der Walt" />;
}
```

# Conditionals

```javascript
export default function App() {
  const day = false
  return (<h1>
    {day ? "It is day" : "it is night"}
  </h1>)
}
```

# Loops

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

# UseState

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

# UseEffect

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

# useRef

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

# useReducer

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

# useContext

`useContext` is a React hook that allows components to access shared data or values from a parent component's context without the need for prop drilling.

<figcaption>/context/auth-context.jsx

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

<figcaption>App.jsx

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

<figcaption>main.jsx

```javascript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { AuthContextProvider } from './context/auth-context.jsx'


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Wrap app in the context provider */}
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);
```

# Custom Hooks

<figcaption>/hooks/useToggler.jsx

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

<figcaption>App.jsx

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

# Router

```bash
npm i react-router-dom
```

<figcaption>MainNavigation.jsx

```javascript
import { Link } from "react-router-dom";

export default function MainNavigation() {
  return (
    <header>
      <p>
        <Link to="/">Home </Link>
      </p>{" "}
      {/* Not home component just a link*/}
      <p>
        <Link to="Products">Products</Link>
      </p>
    </header>
  );
}
```

<figcaption>RootLayout.jsx

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

<figcaption>App.jsx

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

<figcaption>Home.jsx

```javascript
export default function Home() {
  return <h1>Welcome Home</h1>;
}
```

<figcaption>Products.jsx

```javascript
export default function Products() {
  return <h1>This is the Products page</h1>;
}
```

## Dynamic Router

<figcaption>MainNavigation.jsx

```javascript
import { Link } from "react-router-dom";

export default function MainNavigation() {
  return (
    <header>
      <p>
        <Link to="/">Home </Link>
      </p>{" "}
      {/* Not home component just a link*/}
      <p>
        <Link to="Products">Products</Link>
      </p>
    </header>
  );
}
```

<figcaption>RootLayout.jsx

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

<figcaption>App.jsx

```javascript
import "./global.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom"; // npm i react-router-dom

import RootLayout from "./RootLayout";
import Products from "./Products";
import ProductItems from "./ProductItems";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, // Wrap the root layout and add other pages as children
    // errorElement: <ErrorPage />, // if page does not exists show a define error page
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

<figcaption>Products.jsx

```javascript
import { NavLink } from "react-router-dom";

export default function Products() {
  return (
    <>
      <h1>Products Page</h1>
      <NavLink to={"/products/1"}>
        <li>Product 1</li>
      </NavLink>
    </>
  );
}
```

<figcaption>ProductItems.jsx

```javascript
import { useParams } from "react-router-dom";

export default function ProductItems() {
  const params = useParams();

  return (
    <>
      <h1>Product: {params.id}</h1> {/* params.id must match the dynamic route */}
    </>
  );
}
```

## useNavigate

<figcaption>RootLayout.jsx

```javascript
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <Outlet /> {/* Display all child pages */}
    </>
  );
}
```

<figcaption>App.jsx

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

<figcaption>Home.jsx

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

<figcaption>Products.jsx

```javascript
export default function Products() {
  return <h1>This is the Products page</h1>;
}
```

## useLoaderData
Load the data before the page loads and pass the data to the page

<figcaption>App.jsx

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

<figcaption>Content.jsx

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

### useLoaderData Dynamic Routing

<figcaption>Content.jsx

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
<figcaption>App.jsx

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

# Vite: Change Default Port

<figcaption>vite.config.js

```javascript
// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 8000,
  },
})
```

# Extensions

[React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)

[Redux Dev Tools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd/related)