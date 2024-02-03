function Rectangel(width, height) {
  this.width = width;
  this.height = height;
  this.draw = function () {
    console.log("I am drawing rectanlge....");
    console.log(this.printProperties);
  };
  this.printProperties = function () {
    console.log("Height = ", this.height);
    console.log("Width = ", this.width);
  };
}
const rect = new Rectangel(50, 100);
rect.printProperties();
