const friend = {
  name: "Tasmiya zaman",
  email: "tasmiyaamaman@gmail.com",
  age: 20,
};
function Person(name) {
  this.name = name;
}
const p1 = new Person("Sumon");

//NOTE - Constructor prototype
Object.getPrototypeOf(p1) === Person.prototype;
console.log(Object.getPrototypeOf(p1) === Person.prototype);//true

//* p1 এর prototype আর Person মেইন অবজেক্ট এর prototype সেইম।
//* অর্থাৎ Person মেইন অবজেক্ট এর prototype এ যদি কোনো value সেট করে
//* দেওয়া হয়, তা হলে Person মেইন অবজেক্ট দিয়ে যত গুলো person তৈরী করা হবে ,
//* সব গুলোর __proto__ এর মাঝে value টা সেট হয়ে যাবে।
//* অর্থাৎ সব গুলো person এ value টা access able হবে।

/
