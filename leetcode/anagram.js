
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

const isAnagram = function(s1, s2) {

  // type check
  if (typeof s1 !== 'string' || typeof s2 !== 'string') {
    throw new Error('Incorrect input type.');
  }

  // quick length check O(1)
  if (s1.length !== s2.length) {
    return false;
  }

  const s1Chars = [];
  for (let i = 0; i < 128; i++) {
    s1Chars[i] = 0;
  }

  for (let i = 0; i < s1.length; i++) {
    s1Chars[s1.charCodeAt(i)] += 1;
  }

  for (let i = 0; i < s2.length; i++) {
    if (s1Chars[s2.charCodeAt(i)] === 0) {
      return false;
    } else {
      s1Chars[s2.charCodeAt(i)] -= 1;
    }
  }

  return true;
};

// you could sort and compare as well.
const isAnagram = function(s1, s2) {

  // type check
  if (typeof s1 !== 'string' || typeof s2 !== 'string') {
    throw new Error('Nope....');
  }

  // O(1) length comparison
  if (s1.length !== s2.length) {
    return false;
  }

  if (s1.split('').sort().join('') === s1.split('').sort().join('')) {
    return true;
  } else {
    return false;
  }
}


// test cases
console.log(isAnagram('cat', 'tac')); // true
console.log(isAnagram('halley', 'leyhal')); //true
console.log(isAnagram('abcd', 'abc')); // false
console.log(isAnagram('a', 'a')); // true

