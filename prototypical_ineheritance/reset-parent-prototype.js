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
// Set another single method to the Rectangle prototype by using dot notation.
Rectangle.prototype.anotherMethod = function () {
  console.log("I am another method");
};
// reset parent prototype by using equal sign 
Rectangle.prototype = {
  heroMethod: function () {
    console.log("I am Herro method.");
  },
};

// create new object based on those 2 constructor
const shape = new Shape();
const rect = new Rectangle(100);
