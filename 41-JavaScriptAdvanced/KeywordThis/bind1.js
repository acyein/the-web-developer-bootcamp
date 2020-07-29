// 03.1 - Bind
// Using bind in timeout
const colt = {
    firstName: "Colt",
    sayHi: function(){
        setTimeout(function(){
            console.log(`Hi ${this.firstName}`)
        }.bind(this),1000)
    }
}

colt.sayHi(); // Hi underfined (without .bind(this))
colt.sayHi(); // Hi Colt