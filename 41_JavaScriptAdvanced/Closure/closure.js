// Closure - Example of usage
function outer(a){
    return function inner(b){
        return a + b;
    }
}

console.log(outer(3)(9)); // 12

// Or store in a variable
var storeOuter = outer(4);
console.log(storeOuter(10)); // 14