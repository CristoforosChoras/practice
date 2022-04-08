// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
    var newStr = "";
    for (var i = str.length - 1; i >= 0; i--) {
      newStr += str[i];
    }
    return newStr.split(" ").reverse().join(" ");
  }

console.log(reverseWords("This is an example!"))
