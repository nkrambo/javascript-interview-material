
// Is unique: Implement an algorithm to determine if a string has
// all unique characters. What if you cannot use additional data structures.

// input: string of (n) length
// output: boolean

// assumptions - using ASCII, which is a 128 character set

// Using an array of boolean values mapped to chars
// Time: O(n)

const isUnique = function(str) {
  if (str.length > 128) {
    return false;
  }

  const chars = [];
  for (let i = 0; i < 128; i++) {
    chars[i] = false;
  }

  for (let i = 0; i < str.length; i++) {
    const idx = str.charCodeAt(i);

    if (chars[idx]) {
      return false;
    }
    chars[idx] = true;
  }

  return true;
}

// test cases
console.log(isUnique('abc')); // true
console.log(isUnique('abcc')); // false

