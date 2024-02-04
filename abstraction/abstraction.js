// NOTE  Abstraction is a fundamental concept in object-oriented programming (OOP) that refers to the practice of hiding the implementation details of an object and exposing only the essential features to the user. In JavaScript, abstraction is achieved by using abstract classes and interfaces.

function Rectangel(width, height) {
  this.width = width;
  this.height = height;
  // This position:  function is  privet
  let position = {
    x: 50,
    y: 80,
  };
  this.draw = function () {
    console.log("I am drawing rectanlge....");
    console.log(printProperties());
  };
  // This printProperties function is  privet
  const printProperties = function () {
    console.log(this);
    console.log("Height = ", this.height);
    console.log("Width = ", this.width);
    console.log("Position X = ", position.x, "position Y = ", position.y);
    return "Printing....";
  }.bind(this);
}
const rect = new Rectangel(50, 100);
rect.draw();
