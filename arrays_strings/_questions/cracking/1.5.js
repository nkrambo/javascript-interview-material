
// one away
// @param {string} string1 String of n length
// @param {string} string2 String of n length
// @return {boolean} Returns true if the difference between the two strings in 1 or less edits

function oneAway(string1, string2) {

  // type check
  if (typeof string1 !== 'string' || typeof string2 !== 'string') {
    throw new Error('function oneAway(): Requires 2 string type parameters');
  }

  // if lengths differ by more than 1 then can't be true
  if (Math.abs(string1.length - string2.length) > 1) return false;

  const chars = new Map();
  for (let i = 0; i < string1.length; i++) {
    chars.set(string1[i], chars.get(string1[i]) + 1 || 1); // increment by or set to 1
  }

  for (let i = 0; i < string2.length; i++) {
    let count = chars.get(string2[i]);
    if (count) {
      if (count === 1) {
        chars.delete(string2[i]);
      } else {
       chars.set(string2[i], count - 1);
      }
    }
  }

  return chars.size <= 1;
}
