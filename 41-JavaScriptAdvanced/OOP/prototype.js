// OOP 06 - Prototypes and its chain
function Person(name){
    this.name = name;
}

const elie = new Person("Elie");
const colt = new Person("Colt");

console.log(elie.__proto__ === Person.prototype); // true
console.log(colt.__proto__ === Person.prototype); // true
console.log(Person.prototype.constructor === Person); // true

// Prototype chain
Person.prototype.isInstructor = true;
console.log(elie.isInstructor); // true
console.log(colt.isInstructor); // true