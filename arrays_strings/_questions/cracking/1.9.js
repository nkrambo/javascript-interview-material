
// String Rotation
// @param {string} str1 - Base string
// @param {string} str2 - String to check is rotation of str1
// @return {boolean} Returns true if str2 is a rotation of str1,
// otherwise returns false.

// Assume you have a single call to isSubstring();

function isRotation(str1, str2) {

  // type check
  if (typeof str1 !== 'string' || typeof str2 !== 'string') {
    throw new Error('isRotation: Expects 2 params of "string" type.');
  }

  // length check
  if (str1.length !== str2.length) return false;

  if (str1.length <= 1) {
    throw new Error('Cannot rotate string of length (1)');
  }

  return isSubstring(str1 + str1, str2);
}

// Implementation of isSubstring function which is defined in question
// can only be called once
function isSubstring(str, substr) {
  return str.includes(substr);
}