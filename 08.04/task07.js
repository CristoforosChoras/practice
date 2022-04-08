/**
 * 01 easy
 * Write a JavaScript function to generate an array between two integers of 1 step length.
 * Test Data :
 * console.log(rangeBetween(4, 7));
 * [4, 5, 6, 7]
 * console.log(rangeBetween(-4, 7));
 * [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]
 */


// create a function with 2 parameters
// an array of number calculating the range between them. 
// write a loop using the two parameters of our function 

function rangeBetween(num1,num2) {
    let array = [];
    for (let i = num1; i <= num2; i++) {
        array.push(i)
    }
    return array;
}
console.log(rangeBetween(-4,7));