// OOP 02.2 - Exercise
function Dog(name, age) {
    this.name = name;
    this.age = age;
    this.bark = function(){
        console.log(`${name} just barked!`);
    }
}

const tubby = new Dog("Tubby", 3);
const fido = new Dog("Fido", 1);

tubby.bark(); // Tubby just barked!
fido.bark(); // Fido just barked!