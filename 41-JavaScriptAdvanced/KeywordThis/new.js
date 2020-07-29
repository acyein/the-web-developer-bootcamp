// 04 - New
function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

const elie = new Person("Elie", "Schoppik");

console.log(elie.firstName); // Elie
console.log(elie.lastName); // Schoppik