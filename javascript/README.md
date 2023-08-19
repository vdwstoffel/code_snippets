# OOP

```javascript
// Animal.js
class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }

  makeSound() {
    console.log(`${this.name} makes a sound.`);
  }
}

module.exports = Animal;
```

```javascript
// AnotherFile.js
const Animal = require('./Animal');

const cat = new Animal('Whiskers', 'Cat');
cat.makeSound();  // Output: Whiskers makes a sound.
```

