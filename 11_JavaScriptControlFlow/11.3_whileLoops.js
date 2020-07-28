console.log("Print all numbers between -10 and 19");
var num = -10;
while(num <= 19) {           /*OR < 20*/
    console.log(num);
    num+=1;
}

console.log("Print all even numbers between 10 and 40");
var num = 10; 
while(num <= 40) {           /*OR < 41*/
    if(num % 2 === 0) {
        console.log(num);
    }
    num+=1;
}

// OR

// while(num <= 40){
// 	if(num % 2 === 0){
// 		console.log(num);
// 	}
// 	num+=1;
// }

console.log("Print all odd numbers between 300 and 333");
var num = 300; 
while(num <= 333) {
    if(num % 2 !== 0) {
        console.log(num);
    }
    num+=1;
}

console.log("Print all numbers divisible by 5 AND 3 between 5 and 50");
var num = 5; 
while(num <= 50) {
    if(num % 5 === 0 && num % 3 === 0) {
        console.log(num);
    }
    num+=1;
}