// 01.1 - Call
// Refactored to remove repeated sayHi function
const colt = {
    firstName: "Colt",
    sayHi: function(){
        return `Hi ${this.firstName}`
    }
}

const elie = {
    firstName: "Elie"
}

console.log(colt.sayHi()); // Hi Colt
console.log(colt.sayHi.call(elie)); // Hi Elie

// Repated sayHi function
// const colt = {
//     firstName: "Colt",
//     sayHi: function(){
//         return `Hi ${this.firstName}`
//     }
// }

// const elie = {
//     firstName: "Elie",
//     sayHi: function(){
//         return `Hi ${this.firstName}`
//     }
// }

// console.log(colt.sayHi()); // Hi Colt
// console.log(elie.sayHi()); // Hi Elie