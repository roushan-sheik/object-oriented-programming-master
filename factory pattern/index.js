function factoryRect(width, height) {
  return {
    width: width,
    height: height,
    createRect: function () {
      return this.height + this.height;
    },
    printProperties: function () {
      console.log(`Height = ${this.height}`);
      console.log(`Width = ${this.width}`);
    },
  };
}
let rect1 = factoryRect(50, 100);
rect1.printProperties();
