function Rectangel(width, height) {
  this.width = width;
  this.height = height;
  let position = {
    x: 50,
    y: 80,
  };
  this.draw = function () {
    console.log("I am drawing rectanlge....");
    console.log(printProperties());
  };
  const printProperties = function () {
    console.log(this);
    console.log("Height = ", this.height);
    console.log("Width = ", this.width);
      console.log( "Position X = ", position.x, "position Y = ", position.y );
      return "Printing...."
  }.bind(this);
}
const rect = new Rectangel(50, 100);
rect.draw();
