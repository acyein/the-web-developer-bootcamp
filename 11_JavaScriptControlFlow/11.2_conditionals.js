// Example 2
var age = Number(prompt("What is your age?"));

if (age < 0) {
    console.log("Error: number entered is negative");
}

if (age === 21) {
    console.log("Happy 21st Birthday!");
}

if ((age % 2) !== 0) {
    console.log("Your age is odd!")
}

if (age % Math.sqrt(age) === 0) {
    console.log("Your age is a perfect square!");
  }