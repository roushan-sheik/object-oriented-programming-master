const constructorFac = function (width, height) {
  this.width = width;
  this.height = height;
  this.createRect = function () {
    return this.height + this.height;
  };
  this.printProperties = function () {
    console.log(`Height = ${this.height}`);
    console.log(`Width = ${this.width}`);
  };
};
// Remember this one we have to use new keyword to create a new rect
const createRect = new constructorFac(50, 100);
createRect.printProperties();
