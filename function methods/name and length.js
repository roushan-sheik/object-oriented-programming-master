function person(name, age) {
  return {
    name: name,
    age: age,
  };
}
let result = person("Tasmiya", 20);
console.log(result);
console.log(person.name);
console.log(person.arguments);
console.log(person.length);
