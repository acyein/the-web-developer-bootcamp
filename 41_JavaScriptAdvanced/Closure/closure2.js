// Closure 02 - Private variables
function counter(){
    var count = 0;
    return function(){
        return ++count
    }
}

counter1 = counter();
console.log(counter1()); // 1
console.log(counter1()); // 2

counter2 = counter();
console.log(counter2()); // 1
console.log(counter2()); // 2

console.log(counter1()); // 3 (continuation from counter1 and not affected by counter2)

// console.log(count) // ReferenceError: count is not defined - because it is private!