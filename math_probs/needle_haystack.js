
// Implement strStr().
//
// Returns the index of the first occurrence of needle in haystack,
// or -1 if needle is not part of haystack.


const strStr = function(haystack, needle) {

  // edge case
  if (needle.length > haystack.length) {
    throw new Error('Haystack cannot be shorter than needle');
  }

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      return i;
    }
  }

  return -1;

};

// test cases
console.log(strStr('abcd', 'b')); // 1
console.log(strStr('abcd', 'd')); // 3
console.log(strStr('abcd', 'd')); // -1