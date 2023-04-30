// remove an item from an array
const names = ['John', 'Jane', 'Mary'];
const index = names.indexOf('Jane');
names.splice(index, 1);
console.log(names); // [ 'John', 'Mary' ]

// Spread operator
const fruit = ["apple", 'pear', 'orange'];
const all = [...fruit, 'grapes'];
console.log(all); // [ 'apple', 'pear', 'orange', 'grapes' ]

// map example
const cars = ['BMW', 'Volvo', 'Saab'];
console.log(cars.map(x => x.toLocaleUpperCase)); // [ 'BMW', 'VOLVO', 'SAAB' ]

// filter example
const numbers = [1, 2, 3, 4, 5];
const filtered = numbers.filter(x => x > 3); // [ 4, 5 ]

// reduce example
const nums = [1, 2, 3, 4, 5];
const sum = nums.reduce((a, b) => a + b, 0); // 15