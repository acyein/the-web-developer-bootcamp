// OOP 07.2 - Exercise
// Prototype is fast and memory efficient
function Vehicle(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.isRunning = false;
}

Vehicle.prototype.turnOn = function(){
    this.isRunning = true;
}

Vehicle.prototype.turnOff = function(){
    this.isRunning = false;
}

Vehicle.prototype.honk = function(){
    if(this.isRunning){
        return "BEEP";
    }
}

Accord = new Vehicle("Honda", "Accord", "2001");
Accord.turnOn();
console.log(Accord.honk());