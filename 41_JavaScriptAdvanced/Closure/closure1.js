// Closure 01 - Quiz
// Which example has a closure?

function outerFn1(){
    const data = "Something from outer"
    return function innerFn(){
        return "Just returned from the inner function"
    }
}

function outerFn2(){
    const data = "Something from outer"
    return function innerFn(){
        var innerData = "Something from inner"
        return `${data}, ${innerData}`
    }
}

console.log(outerFn1()()); // Just reached from the inner function
console.log(outerFn2()()); // Something from outer, Something from inner

// Answer is the second example