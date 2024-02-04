//* Property Descriptor
// অর্থাৎ আমরা অজেক্ট এর Property গুলোকে ডিসক্রাইব করতে পারি।
// এটার উপর লুপ চালানো জাবে কি না, কেউ value পরিবর্তন করতে পারবে কি না।
let person = {
  name: "Tasmiya",
  email: "tasmiya@gmail.com",
  age: 20,
};
// To see property  descriptor
const result = Object.getOwnPropertyDescriptor(person, "name");
console.log(result);
let Ouput = {
  value: "Tasmiya", //* আমরা ফিক্সড একটা value দিয়ে দিতে পারি যেটা কেউ পরিবর্তন করতে পারবে না।
  writable: true, //* কেউ overwrite করতে পাবে কি না।
  enumerable: true, //* loop চালিয়ে ইটারেট করতে পারবে কি না।
  configurable: true, // * বাইরে থেকে ডিলিট করতি পারবাে কি না।
};
//NOTE - To see our base object property descriptor
//base object
let baseObj = Object.getPrototypeOf(person);
// we want to see base object toString property descriptor
let descriptor = Object.getOwnPropertyDescriptor(baseObj, "toString");
// Our existing output
let Output = {
  writable: true,
  enumerable: false,
  configurable: true,
  value: "Function", // f
};
//NOTE -  To define property descriptor
Object.defineProperty(person, "name", {
  value: "Arifa Moni",
    //* এখানে enumerable: false করে দেওয়া হয়েছে 
    //* তার মানে এটা hide হয়ে যাবে এটাকে access করা যাবে না।
  enumerable: false,
  writable: false,
});
console.log(person);
