// Person constructor
function Person(name) {
  //* Object.create মেথড টা BasePerson এর prototype টা কে inherit করবে।
  this.name = name;
}
// Set the prototype to Person and make life easer
Person.prototype = {
  eat: function () {
    console.log("Eating...");
  },
  sleep: function () {
    console.log("Sleeping...");
  },
};

const p1 = new Person("Tasmiya");
console.log(p1);
p1.eat();
// person 2
const p2 = new Person("Arifa Moni");
console.log(p2);
p1.sleep();
