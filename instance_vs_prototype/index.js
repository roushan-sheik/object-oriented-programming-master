// Instance  Vs Prototype
function Rectangle(width) {
  this.width = width;
}
//* Rectangle এর prototype এর ভেতরে কমন মেথড draw টা কে সেট করা হয়েছে।
//* এখন Rectangle কনস্ট্রাক্টর দিয়ে যত অবজেক্ট তৈরী হবে draw টা কমন মেথড হবে।
Rectangle.prototype = {
  draw: function () {
    console.log("drawing...");
  },
};
const rect1 = new Rectangle(100);
rect1.draw();
const rect2 = new Rectangle(50);
rect2.draw();
