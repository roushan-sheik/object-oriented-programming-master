//* constructor হচ্ছে অবজেক্ট এর রেফারেন্স  যেটা দিয়ে আমরা অবজেক্ট কনস্ট্রাক্ট করতে পারি।
// Shape constructor which will contain all the common methods
function Shape() {
  this.shape = function () {
      console.log( "I am Shape" );
      return "I am Shape"
  };
}
// Set Shape Prototype
Shape.prototype.common = function () {
  console.log("I am a common Method");
};
// Create a rectangle class to create rect.
function Rectangle(width) {
  this.width = width;
}

// Set another single method to the Rectangle prototype by using dot notation.
Rectangle.prototype.anotherMethod = function () {
  console.log("I am another method");
};
//* constructor হচ্ছে অবজেক্ট এর রেফারেন্স
//* যেটা দিয়ে আমরা অবজেক্ট কনস্ট্রাক্ট করতে পারি।
const newObj = new Shape.prototype.constructor();
console.log(newObj.shape());

// create new object based on those 2 constructor
const shape = new Shape();
const rect = new Rectangle(100);
