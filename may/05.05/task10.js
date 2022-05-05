// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// "Let's travel abroad shall we"), 2);


// const findShort = (s) => s
//   .split(' ')
//   .sort((a, b) => b.length - a.length)
//   .pop()
//   .length;

  function findShort(s){
    return s.split(' ').map(item => item.length).reduce((prev, curr) => Math.min(prev, curr))
  }

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));