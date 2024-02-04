function Rectangle(width) {
  this.width = width;
  this.getWidth = function () {
    console.log("My width is ", this.width);
  };
}
Rectangle.prototype = {
  draw: function () {
    console.log("Drawing... width is ", this.width);
  },
  toString: function () {
    console.log("I am toString method.");
  },
};
const rect1 = new Rectangle(100);
const rect2 = new Rectangle(50);
let obj = {
  name: "tasmiya",
};
//* তার মানে যদি existing property টা  existing অবজেক্ট এ থাকে তাহলে,
//* hasOwnProperty(””) টা true রিটার্ন করবে।
// let result = obj.hasOwnProperty("name");// true
let result = rect1.hasOwnProperty("getWidth");// true
console.log(result);
