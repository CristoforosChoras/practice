// Return a string in reverse
//  ex:
// reverseString('hello') === 'olleh';


function reverseString(str) {
    return str.split("").reverse().join("")
}
console.log(reverseString("hello"));
