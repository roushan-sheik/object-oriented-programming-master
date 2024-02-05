// Shape constructor which will contain all the common methods
function Shape(color) {
  this.color = color;
}
// Set Shape Prototype
Shape.prototype.commonMethod = function () {
  console.log("I am a common Method");
};
// Create a rectangle class to create rect.
function Rectangle(width, color) {
  //* Shape এর কালার প্রোপারটি টার ও এক্সেস নিতে চাচ্ছি।
  //* আমরা যদি প্যরামিটার এর মাধ্যমে  কালার নিয়ে Shape কে কল করে দেই
  //* তা হলে Shape এর this টা window অবজেক্ট কে রেফার করবে।
  // Shape(color);
  //* তাই আমরা call() মেথড এর মাধ্যমে Shape এর কনটেক্স টা বলে দিব।
  Shape.call(this, color);
  this.width = width;
}
// Inherit the prototype of Shape to the Rectangle class
//* Rectangle এর prototype reset/পরিবর্তন করলে তার নিজস্ব কনস্ট্রাক্টর কে সে
//* হারিয়ে ফেলবে, তাই তার কনস্ট্রাক্টর টা কে ও reset করে দিতে হবে।
Rectangle.prototype = Object.create(Shape.prototype);
//কনস্ট্রাক্টর টা কে ও reset করে দিতে হবে।
Rectangle.prototype.constructor = Rectangle;

// Set another single method to the Rectangle prototype by using dot notation.
Rectangle.prototype.anotherMethod = function () {
  console.log("I am another method");
};

// create new object based on those 2 constructor
const shape = new Shape();
const rect = new Rectangle(100, "Green");
