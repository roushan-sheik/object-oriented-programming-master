//* JavaScript objects have a link to a prototype object.
//* সহজ ভাবে prototype এর মানে হচ্ছে প্যরেন্ট  ক্লাস । 
let obj1 = {}
let obj2 = {}
// To compare the two object 
console.log( obj1.__proto__ === obj2.__proto__ );// true
(Object.getPrototypeOf(ob1)=== Object.getPrototypeOf(obj2))// true