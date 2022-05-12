// #### CHALLENGE 2: VALIDATE A PALINDROME
// // Return true if palindrome and false if not
// // ex:
// isPalindrome('racecar') === true;
// isPalindrome('hello') == false;

function isPalindrome(str) {
    return str === str.split("").reverse().join("")
}
console.log(isPalindrome('what'));
