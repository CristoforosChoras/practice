/**
 * 02 easy medium
 * Write a JavaScript function to generate an array of specified length, 
 * filled with integer numbers, increase by one from starting position.
 * console.log(arrayRange(1, 4));
 * [1, 2, 3, 4]
 * console.log(arrayRange(-6, 4));
 * [-6, -5, -4, -3]
 */


// create a function 
// we need a loop
// result should be like if i have in the parameter 1 ,9 should go from 1 and adding nine times from the starting position 
// example -1,9 should be -1 until 8

function arrayRange(num1,num2) {
    let array =[];
    for (let i = num1; i < num1 + num2; i++) {
        
      array.push(i)
    }
    return array
}

console.log(arrayRange(-6,4))

