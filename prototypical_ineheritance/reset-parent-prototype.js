// Shape constructor which will contain all the common methods
function Shape() {}
// Set Shape Prototype
Shape.prototype = {
  commonMethod: function () {
    console.log("I am a common Method");
  },
};
// Create a rectangle class to create rect.
function Rectangle(width) {
  this.width = width;
}
// Inherit the prototype of Shape to the Rectangle class
Rectangle.prototype = Object.create(Shape.prototype);
// Set another single method to the Rectangle prototype
Rectangle.prototype.anotherMethod = function () {
  console.log("I am another method");
};

// create new object based on 2 constructor
const shape = new Shape();
const rect = new Rectangle(100);
