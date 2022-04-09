/**
 * 06 easy
 * Write a function to find if an array contains a specific element
 * checkItem([2, 5, 9, 6], 5) should return true
 * checkItem([2, 5, 9, 6], 1) should return false
 */

const checkItem = (array,item) =>{
    if (array.includes(item)) {
        return true;
    }else{
        return false;
    }
}

console.log(checkItem([2, 5, 9, 6], 1));