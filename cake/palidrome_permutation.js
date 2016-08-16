

// input: string of (n) length
// output: boolean

// what we know about palindromes

const isPermuationPalindrome = function(str) {

  const unPairedChars = new Set();

  for (let char of str) {
    if (unPairedChars.has(char)) {
      unPairedChars.delete(char);
    } else {
      unPairedChars.add(char);
    }
  }

  return unPairedChars.size <= 1;
}
