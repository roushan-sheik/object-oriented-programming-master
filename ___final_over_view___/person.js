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
  let person = {};
  person.name = name;
  person.eat = BasePerson.eat;
  person.sleep = BasePerson.sleep;
  return person;
}
const p1 = Person("Tasmiya");
console.log(p1);
p1.eat();
// person 2
const p2 = Person("Arifa Moni");
console.log(p2);
p1.sleep();
