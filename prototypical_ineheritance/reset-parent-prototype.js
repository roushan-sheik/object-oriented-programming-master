// Shape constructor which will contain all the common methods
function Shape() {}
// Set Shape Prototype
Shape.prototype.commonMethod = function () {
  console.log("I am a common Method");
};
// Create a rectangle class to create rect.
function Rectangle(width) {
  this.width = width;
}
// Inherit the prototype of Shape to the Rectangle class
//* Rectangle এর prototype reset/পরিবর্তন করলে তার নিজস্ব কনস্ট্রাক্টর কে সে
//* হারিয়ে ফেলবে, তাই তার কনস্ট্রাক্টর টা কে ও reset করে দিতে হবে।
Rectangle.prototype = Object.create( Shape.prototype );
//কনস্ট্রাক্টর টা কে ও reset করে দিতে হবে।
Rectangle.prototype.constructor = Rectangle

// Set another single method to the Rectangle prototype by using dot notation.
Rectangle.prototype.anotherMethod = function () {
  console.log("I am another method");
};
 
// create new object based on those 2 constructor
const shape = new Shape();
const rect = new Rectangle(100);
