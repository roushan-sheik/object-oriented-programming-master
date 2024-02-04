// Common shape constructor
function Shape() {}
// Shape prototype
Shape.prototype = {
  common: function () {
    console.log("I am a common function.");
  },
};
// constructor
function Square(width) {
  this.width = width;
}
//* shape inherit করছে Shape_base কে,আর Shape_base inherit করছে Object কে
//* sqr inherit করছে Square_base কে,আর Square_base inherit করছে Object কে
//* We need: sqr --> Square_base --> Shape --> Object
// We can create an object by using Object.create() method
// Then we can set our created existing object as Main Prototype
Square.prototype = Object.create(Shape.prototype);
// Prototype
Square.prototype.draw = function () {
  console.log("Drawing...");
};

const shape = new Shape();
const sqr = new Square(100);
