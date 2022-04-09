/**
 * 08 medium
 * Remove all duplicates from an array of integers
 * example: with input [1,2,3,1] the function
 * should return [1,2,3]
 */


const removeDuplicates =(input) =>{
    let array =[];
    for (let i = 0; i < input.length; i++) {
        if(!array.includes(input[i])){
        array.push(input[i])
    }
}
return array;
}

console.log(removeDuplicates([1,2,3,1]));