"use strict";

class User {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello ${this.name}`);
  }
}

const stoffel = new User("Stoffel");
stoffel.greet();

/***********************
 ***** Inheritance *****
 ***********************/
class Action extends User {
  constructor(name, action) {
    super(name);
    this.action = action;
  }

  walk() {
    console.log(`${this.name} went to ${this.action}`);
  }
}

const action = new Action("Christoff", "walk");
action.walk();
