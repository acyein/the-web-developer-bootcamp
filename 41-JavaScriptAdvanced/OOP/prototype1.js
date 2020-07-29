// OOP 07.1 - Example
// Refactored
function Person(name){
    this.name = name;
}

Person.prototype.sayHi = function(){
    return `Hi ${this.name}`
}

elie = new Person("Elie");
console.log(elie.sayHi()); // Hi Elie

// Original
// function Person(name){
//     this.name = name;
//     this.sayHi = function(){
//         return `Hi ${this.name}`
//     }
// }

// elie = new Person("Elie");
// console.log(elie.sayHi()); // Hi Elie