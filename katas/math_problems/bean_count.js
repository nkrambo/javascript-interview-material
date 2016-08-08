
// You can get the Nth character, or letter, from a string by writing "string".charAt(N),
// similar to how you get its length with "s".length. The returned value will be a string
// containing only one character (for example, "b"). The first character has position zero, which
// causes the last one to be found at position string.length - 1. In other words, a two-character
// string has length 2, and its characters have positions 0 and 1.

// Write a function countBs that takes a string as its only argument and returns a number that
// indicates how many uppercase “B” characters are in the string.

// Next, write a function called countChar that behaves like countBs, except it takes a second
// argument that indicates the character that is to be counted (rather than counting only
// uppercase “B” characters). Rewrite countBs to make use of this new function.

const countBs = function (str) {
  let count = 0;
  for (let i = 0; i <= str.length; i++) {
    if (str.charAt(i) === 'B') {
      count += 1;
    }
  }
  return count;
}


const countChar = function(str, char) {
  let count = 0;
  for (let i = 0; i <= str.length; i++) {
    if (str.charAt(i) === char) {
      count += 1;
    }
  }
  return count;
}

// test cases
console.log(countBs('aahhss')); // 0
console.log(countBs('b')); // 0
console.log(countBs('B')); // 1
console.log(countBs('aahBssjhsB')); // 2
console.log(countBs('aBhhsBsasbdbsBss')); // 3


// test cases
console.log(countChar('aahhss', 'a')); // 0
console.log(countChar('b', 'B')); // 0
console.log(countChar('B', 'B')); // 1
console.log(countChar('aahBssjhsB', 'B')); // 2
console.log(countChar('aBhhsBsasbdbsBss', 'B')); // 3

