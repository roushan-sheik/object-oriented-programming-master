function Rectangel(width, height) {
  this.width = width;
  this.height = height;
  // This position:  function is  privet
  let position = {
    x: 50,
    y: 80,
  };
  // Access our position from out of the method
  this.getPostion = function () {
    console.log(position);
    return position;
  };
  // Draw method
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
console.log(rect.getPostion());
