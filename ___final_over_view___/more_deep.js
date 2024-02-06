// Base object
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype = {
  eat: function () {
    console.log("Eating...");
  },
};
// Cricketer
function Cricketer(name, age, type, country) {
  this.type = type;
  this.country = country;
  // Calling Super method
  Person.call(this, name, age);
}
// Inherit the Person prototype
Cricketer.prototype = Object.create(Person.prototype);
// Now we have to override the constructor
Cricketer.prototype.constructor = Cricketer;
// Create a new cricketer
const sakib = new Cricketer("Sakib Al Hasan", 35, "All runder", "Bangladesh");

console.log(sakib);
sakib.eat();

// Lets do the same thing with class
class Cricket {
  constructor(name, age, type, country) {
    this.name = name;
    this.age = age;
    this.type = type;
    this.country = country;
  }
  eat() {
    console.log("Eating...");
  }
}
const sakib2 = new Cricket("Sakib 2", 30, "All rounder 2", "Bangladesh");
console.log(sakib2);
