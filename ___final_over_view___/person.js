// Person constructor
function Person(name) {
  //* Object.create মেথড টা BasePerson এর prototype টা কে inherit করবে।
  let person = Object.create(Person.prototype);
  person.name = name;
  return person;
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

const p1 = Person("Tasmiya");
console.log(p1);
p1.eat();
// person 2
const p2 = Person("Arifa Moni");
console.log(p2);
p1.sleep();
