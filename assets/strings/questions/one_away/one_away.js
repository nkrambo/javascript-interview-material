
/**
* One Away
*
* There are three types of edits that can be performed on strings: insert a
* character, remove a character, or replace a character. Given two strings,
* write a function to check if they are one edit (or zero edits) away.
*
* Example:
* pale, ple -> true
* pales, pale -> true
* pale, bale -> true
* pale, bae -> false
*/

/**
* oneAway()
*
* Solution:
*
* We can possibly do a fast return by comparing the lengths of the two strings.
* If the lengths differ by more than 1, we know that they must differ by more than
* 1 edit.
*
* Otherwise we can use a map to track the type and count of characters in str1.
* We then also interate over str2 and compare the occurence of characters, removing
* and decremting as needed.
*
* If the strings are only 1 edit (or less) apart, then the size of the map should
* be less than or equal to 1, representing the 1 edit allowed.
*
* Time: O(n)
* Space: O(n)
*
* Where n is the length of the string input.
*
* @param {string} str1 string of (n) length
* @param {string} str2 string of (n) length
* @return {boolean} returns true if difference is 1 or less edits, otherwise returns false
*/

function oneAway(str1, str2) {

  // if lengths differ by more than 1, must be false
  if (Math.abs(str1.length - str2.length) > 1) return false;

  // count characters in str1
  const chars = new Map();
  for (let i = 0; i < str1.length; i += 1) {

    // increment by or set to 1
    chars.set(str1[i], chars.get(str1[i]) + 1 || 1);
  }

  // compare str2 against str1
  for (let i = 0; i < str2.length; i += 1) {
    let count = chars.get(str2[i]);
    if (count) {
      if (count === 1) {
        chars.delete(str2[i]);
      } else {
       chars.set(str2[i], count - 1);
      }
    }
  }

  return chars.size <= 1;
}

export default oneAway;
