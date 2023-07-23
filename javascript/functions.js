"use strict";

/***************************
 ***** Arrow Functions *****
 ***************************/

// arrow function example
const sayHello = () => {
  console.log("hello");
};

//arrow function on one line
const sayHello2 = () => console.log("hello");

/*
Rest Operator
Takes a unlimited number of arguments and converts them into an array
*/
const words = (...args) => {
  args.map((arg) => console.log(arg.toUpperCase()));
};
