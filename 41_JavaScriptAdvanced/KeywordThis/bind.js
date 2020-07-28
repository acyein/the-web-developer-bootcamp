// 03 - Bind
const colt = {
    firstName: "Colt",
    sayHi: function(){
        return `Hi ${this.firstName}`;
    },
    addNumbers: function(a,b,c,d){
        return `${this.firstName} just calculated ${a+b+c+d}`;
    }
}

const elie = {
    firstName: "Elie"
}

const elieCalc = colt.addNumbers.bind(elie,1,2);
console.log(elieCalc()); // NaN (must have total of 4 arguments)
console.log(elieCalc(10,10)); // Elie just calculated 23
console.log(elieCalc(4,4)); // Elie just calculated 11
console.log(elieCalc(4,4,8)); // Elie just calculated 11 (extra argument is ignored)

console.log("-------------------------")

const elieCalc2 = colt.addNumbers.bind(elie,1,2,3,4)
console.log(elieCalc2()); // Elie just calculated 10
console.log(elieCalc2(5,6)); // Elie just calculated 10 (extra arguments are ignored)