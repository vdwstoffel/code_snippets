"use strict";

const names = {first: 'Christoff', last: 'van der Walt'}
console.log(names.first); //Christoff

// Destructuring
const {first, last} = names;
console.log(first); //Christoff

// Assign alias to destructuring
const {first: myName} = names;
console.log(myName); //Christoff