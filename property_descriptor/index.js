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
