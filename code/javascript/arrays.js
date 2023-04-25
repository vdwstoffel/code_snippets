// remove an item from an array
const names = ['John', 'Jane', 'Mary'];
const index = names.indexOf('Jane');
names.splice(index, 1);
console.log(names); // [ 'John', 'Mary' ]

// Spread operator
const fruit = ["apple", 'pear', 'orange'];
const all = [...fruit, 'grapes'];
console.log(all); // [ 'apple', 'pear', 'orange', 'grapes' ]