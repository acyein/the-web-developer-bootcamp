// 01 - Call
const person = {
    firstName: "Colt",
    sayHi: function(){
        return `Hi ${this.firstName}`
    },
    determineContext: function(){
        return this === person;
    },
    dog: {
        sayHello: function(){
            return `Hello ${this.firstName}`
        },
        determineContext: function(){
            return this === person;
        }
    }
}

console.log(person.sayHi()); // Hi Colt
console.log(person.determineContext()); // true

console.log(person.dog.sayHello.call(person)); // Hello Colt
console.log(person.dog.determineContext.call(person)); // true