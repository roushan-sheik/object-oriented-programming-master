class Perosn {
  constructor(name, email, age) {
    this.name = name;
    this.email = email;
    this.age = age;
  }
  //NOTE  Validation with using Setter
  set name(newName) {
    if (typeof newName === "string" && newName.length > 0) {
      this._name = newName;
    } else {
      console.error("Invalid name! please provide a valid name");
    }
  }
  set email(newEmail) {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (newEmail.match(regex)) {
      this._email = newEmail;
    } else {
      console.error("Enter a valid email!");
    }
  }
  set age(newAge) {
    if (typeof newAge === "number" && newAge > 0) {
      this._age = newAge;
    }
  }
  // NOTE - Get the value using  Getter
  get name() {
    return this._name;
  }
  get email() {
    return this._email;
  }
  get age() {
    return this._age;
  }
}
const p1 = new Perosn("Tasmiya", "tasmiya@gma", 18);
console.log(p1.name);
console.log(p1.email); //* Inter a valid email (Error)
console.log(p1.age);
