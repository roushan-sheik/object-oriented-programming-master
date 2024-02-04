// Instance  Vs Prototype
function Rectangle(width) {
  //* কনস্ট্রাক্টর এর ভেতরে থাকা মেথডস গুলোকে  Instance মেথডস বলে।
  this.width = width;
}
//* Rectangle এর prototype এর ভেতরে কমন মেথড draw টা কে সেট করা হয়েছে।
//* এখন Rectangle কনস্ট্রাক্টর দিয়ে যত অবজেক্ট তৈরী হবে draw টা কমন মেথড হবে।
Rectangle.prototype = {
  //* Prototype এর ভেতরে থাকা মেথডস গুলোকে  Prototypical মেথডস বলে।
  draw: function () {
    console.log("drawing...");
  },
  //* Method Overwrite
  //* toString মেথড কে Overwrite করা হল। Prototype মেথড েএর মাধ্যমে।
  toString: function () {
    //* এখান থেকে Instance মেথড এর ও acess আছে। this.width এর মাধ্যমে।  
    console.log("I was to string method my width is ", this.width);
  },
};
const rect1 = new Rectangle(100);
rect1.draw(); //* draw টা কমন মেথড হবে।
const rect2 = new Rectangle(50);
rect2.draw(); //* draw টা কমন মেথড হবে।
