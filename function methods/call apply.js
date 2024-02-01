let obj = {
  id: "0201",
  name: "Box",
  color: "blue",
  width: 50,
  height: 100,
};
//* call() and apply() methods in function
function printBoxSize() {
  console.log(this);
  console.log("Box size is ", this.width + this.height);
}
//* printBoxSize(); এভাবে আমরা ফাংশন কে normally কল করে থাকি কিন্তু
//* call() and apply() মেথড ফাংশন েকে কল করার জন্যই ব্যবহার করা হয় পার্থক্য হল,
//* এটার মাধ্যমে আমরা execution context বলে দেই, যে ভাই তুমি
//* এই object এর সাপেক্ষে এক্সিকিউট হইবা।
//* এটার প্যারামিটারে আমরা ফাংশন এর আরগিউমেন্ট দিতে পারি।
printBoxSize.call(obj); //! call(obj, 50,100)
printBoxSize.apply(obj); //! apply(obj, [50,100])
//! call() and apply() মেথড সাথে ফাংশন কে কল করে দেয় ।
//! কিন্তু bind() মেথড কল করে না শুধূ  execution context টা বলে দেয়।
