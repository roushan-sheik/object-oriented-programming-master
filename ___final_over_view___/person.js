const BasePerson = {
  eat: function () {
    console.log("Eating...");
  },
  sleep: function () {
    console.log("Sleeping...");
  },
};
// Person constructor
function Person(name) {
  //* Object.create মেথড টা BasePerson এর prototype টা কে inherit করবে।
  let person = Object.create(BasePerson);
  person.name = name;
  return person;
}
const p1 = Person("Tasmiya");
console.log(p1);
p1.eat();
// person 2
const p2 = Person("Arifa Moni");
console.log(p2);
p1.sleep();
