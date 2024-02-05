let canEat = {
  eat: function () {
    console.log("Eating...");
  },
};
let canWalk = {
  walk: function () {
    console.log("Walking...");
  },
};
// Create a Person Obj who can eat and walk

function Person(name) {
  this.name = name;
}
Object.assign(Person.prototype, canEat, canWalk);

const p1 = new Person("Tasmiya");
p1.eat();
p1.walk();
