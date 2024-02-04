// Common shape constructor
function Shape() {
  // Shape prototype
  Shape.prototype = {
    common: function () {
      console.log("I am a common function.");
    },
  };
}
// constructor
function Square(width) {
  this.width = width;
}
// Prototype
Square.prototype = {
  draw: function () {
    console.log("Drawing...");
  },
};
const shape = new Shape();
//* shape inherit করছে Shape_base কে,
//* আর Shape_base inherit করছে Object কে
const sqr = new Square(100);
//* sqr inherit করছে Square_base কে,
//* আর Square_base inherit করছে Object কে
