function extend(Obj, BaseObj) {
  Obj.prototype = Object.create(BaseObj.prototype);
  Obj.prototype.constructor = Obj;
}
// Base obj
function Shape(color) {
  this.color = color;
}
Shape.prototype.common = function () {
  console.log("I am common method form Shape");
};
//  Square obj
function Square(width, color) {
  Shape.call(this, color);
  this.width = width;
}
extend(Square, Shape);

Square.prototype.draw = function () {
  console.log("Draing...");
};
//Circle Obj
function Circle(radius) {
  this.radius = radius;
}
extend(Circle, Shape);
const sqr = new Square(100, "Green");
const cir = new Circle(50);
