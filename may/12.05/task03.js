// ### CHALLENGE 3: REVERSE AN INTEGER
// // Return an integer in reverse
// // ex:
// reverseInt(521) === 125;


function reverseInt(number) {
    let reverse = number.toString().split("").reverse().join("")
    return parseInt(reverse)
}

console.log(reverseInt(521));
