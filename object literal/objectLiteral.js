const rect = {
  width: 50,
  height: 100,
  createRect: function () {
    return this.height + this.height;
  },
  printProperties: function () {
    console.log(`Height = ${this.height}`);
    console.log(`Width = ${this.width}`);
  },
};
let result = rect.printProperties();
console.log(result);
