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
function Cricketer(type, country) {
  this.type = type;
  this.country = country;
}
// Inherit the Person prototype
Cricketer.prototype = Object.create( Person.prototype );


