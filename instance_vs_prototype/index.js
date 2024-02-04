// Instance  Vs Prototype
function Rectangle ( width )
{
  this.width = width;
  this.draw = function () {
    console.log("drawing...");
  };
}
const rect1 = new Rectangle(100);
rect1.draw();
