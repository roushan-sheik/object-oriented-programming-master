// Mixin
function mixin(target, ...task) {
  Object.assign(target, ...task);
}
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
// Gold fish
let canSwim = {
  swim: function () {
    console.log("Swiming...");
  },
};
// Create a Person Obj who can eat and walk

function Person(name) {
  this.name = name;
}
// Object.assign(Person.prototype, canEat, canWalk);
mixin(Person.prototype, canWalk, canEat);
// Our new Gold fish features
function GoldFish(name) {
  this.name = name;
}
mixin(GoldFish.prototype, canEat, canSwim);
// Create new person object
const p1 = new Person("Tasmiya");
// p1.eat();
// p1.walk();
// Create new gold fish object
const fish = new GoldFish("Gold Fish");
// fish.eat();
// fish.swim();
