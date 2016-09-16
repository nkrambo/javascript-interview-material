// string compression
// @param {string} string - string of n length
// @return {string} Returns a compressed version of string if shorter than original string

function stringCompress(string) {

  // type check
  if (typeof string !== 'string') {
    throw new Error('function stringCompress(): Requires a single parameter of \'string\' type');
  }

  // we know that we cannot further compress a string of length 2
  if (string.length <= 2) return string;

  // iterate over string and count sequential occurences of chars and replace
  // each set of occurences with a single 'key' character and the number of occurences.

  let compressed = '';
  let charCount = 1;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i + 1]) {
      charCount++;

    } else {
      compressed = compressed.concat(string[i] + charCount);
      charCount = 1;
    }
  }

  return compressed.length < string.length ? compressed : string;
}

