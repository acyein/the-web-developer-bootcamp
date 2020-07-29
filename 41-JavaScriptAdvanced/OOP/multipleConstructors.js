// OOP 04 - Multiple constructor functions
function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.numWheels = 4;
}

function Motorcycle(make, model, year){
    // Using call
    Car.call(this, make, model, year)
    this.numWheels = 2;
}

function Motorcycle(make, model, year){
    // Using apply
    Car.apply(this, [make, model, year])
    this.numWheels = 2;
}
function Motorcycle(make, model, year){
    // Using apply with arguments (i.e., [make, model, year])
    Car.apply(this, arguments)
    this.numWheels = 2;
}
