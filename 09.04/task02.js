/**
 * 07 medium
 * Write a function which merges two arrays and removes all duplicates elements
 * Example:
 * array1 = [1, 2, 3];
 * array2 = [2, 30, 1];
 * mergeArrays(array1, array2) should return [3, 2, 30, 1] (the items can be with any order)
 */
const mergeArrays = (array1,array2) =>{
    let array = [...array1]
    for (let i = 0; i < array2.length; i++) {
        if (!array1.includes(array2[i])) {
            array.push(array2[i])
        }
    }
    return array;
}

console.log(mergeArrays([2, 30, 1],[1,2,3]));