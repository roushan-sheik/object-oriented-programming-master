let rect = new Function(
  "height",
  "width",
  `
  this.width = width;
  this.height = height;
  this.createRect = function () {
    return this.height + this.height;
  };
  this.printProperties = function () {
    console.log("Height " , this.height  );
    console.log("Width " , this.width);
    return "Printing..."
  }`
);

const result = new rect(50, 100);
let l2 = result.printProperties();
console.log(l2);
console.log(result);
