
/**
* String Rotation
*
* Assume you have a method isSubstring(), which checks if one word is a
* substring of another. Given two strings, s1 and s2, write code to check
* if s2 is a rotation of s1 using only one call to isSubstring().
*
* Example: 'watterbottle' is a rotation of 'erbottlewat'
*/

/**
* isRotation()
*
* Solution:
*
* As in the example, if we rotate 'waterbottle' after 'wat', you get 'erbottlewat'.
* In a rotation, we cut s1 into two parts, x and y, and rearrange them to get s2.
*
* s1 = xy = waterbottle
* x = wat
* y = erbottle
* s2 = erbottlewat
*
* So, we need to check if there's a way to split s1 into x and y such that xy = s1
* and yx = s2. Regardless of where the division between x and y is, we can see that
* yx will always be a substring of xyxy. That is, s2 will always be a substring of s1s1.
*
* And that's how we solve this. We check isSubstring(s1s1, s2).
*
* Time: O(n)
* Space: O(1)
*
* The runtime of this depends on the runtime of isSubstring(). But if we assume that
* isSubstring() runs at O(a + b), of strings length (a) and (b), then the runtime of
* isRotation() would be O(n).
*
* @param {string} str1 base string
* @param {string} str2 string to check is rotation of str1
* @return {boolean} returns true if str2 is a rotation of str1, otherwise returns false.
*/

function isRotation(str1, str2) {

  // length check, short-circuit
  if (str1.length !== str2.length) return false;

  // edge case
  if (str1.length <= 1) {
    throw new Error('Cannot rotate string of length (1)');
  }

  return isSubstring(str1 + str1, str2);
}

function isSubstring(str, substr) {
  return str.includes(substr);
}

export default isRotation;
