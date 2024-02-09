class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  name = "Tasmiya Moni";
  draw() {
    console.log("My widt is ", this.width);
  }
}
const rect = new Rectangle(200, 50);
console.log(rect);
rect.draw();
