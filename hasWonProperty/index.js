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
let result = rect1.hasOwnProperty("getWidth"); // true
console.log(result);
//NOTE -
//* শুধুমাত্র instance/ নিজস্ব methods গুলো দেখার জন্য Object.keys() ব্যবহার করতে পারি।
let instMethods = Object.keys(rect1);
console.log(instMethods); // ['width', 'getWidth']
//NOTE -
//* instance এবং prototypical methods সব গুলো দেখার জন্য ফর ইন লুপ ব্যবহার করতে পারি।
for (const methods in rect1) {
  console.log(methods); 
}
