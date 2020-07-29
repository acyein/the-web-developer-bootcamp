// printReverse()
function printReverse(arr) {
    for(var i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}

printReverse([4,9,3,15]);

// if want to return a new array with reversed values

// function printReverse(arr) {
//     var newArray = [];
//     for(var i = arr.length - 1; i >= 0; i--) {
//         newArray.push(array[i]);
//     }
//     return newArray;   
// }

// isUniform()
function isUniform(arr) {
    var first = arr[0];
    for(var i = 1; i < arr.length; i++) {
        if(arr[i] !== first) {
            return false;
        }
    }
    return true;
}

// sumArray()
function sumArray(arr) {
    var total = 0
    arr.forEach(function(num) {
        total += num;
    })
    return total;
}

// max()
function max(arr) {
    var largest = arr[0];
    for(var i = 1; i < arr.length; i++) {
        if(arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}