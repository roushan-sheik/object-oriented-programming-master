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
//  Square obj ===============>
function Square(width, color) {
  Shape.call(this, color);
  this.width = width;
}
extend(Square, Shape);

Square.prototype.draw = function () {
  console.log("Draing...");
};
// Method overriding
Square.prototype.common = function () {
  console.log("I am common method form Square");
};
//Circle Obj =============>
function Circle(radius) {
  this.radius = radius;
}
extend(Circle, Shape);
// Method overriding
Circle.prototype.common = function () {
  console.log("I am common method from  Circle ");
};
const sqr = new Square(100, "Green");
const cir = new Circle(50);
// instance of operator ব্যবহার করে ্আমরা parent বের করতে পারি।
// কার child ্এটা ।  
let obj = {};
// obj instanceof Object;
// true;
// sqr instanceof Square;
// true;
// sqr instanceof Circle;
// false;
// sqr instanceof Circle;
// false;