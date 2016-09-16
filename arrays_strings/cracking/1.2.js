/**
 * Keep track of characters counts with a Map data structure, fail when
 * str2 has a character different to str2 or if any characters are left over
 * at the end.
 *
 * N = |str1| && M = |str2|
 * Time: O(N + M)
 * Additional space: O(N)
 *
 * @param  {string[]} str2 First string, passed in as a character array
 * @param  {string[]} str1 Second string, passed in as a character array
 * @return {boolean}       True if first and second strings are permutations otherwise false
 */

function isPermutationMap(str1, str2) {

  if (typeof str1 !== 'string' || typeof str2 !== 'string') {
    throw new Error('Must pass in two strings');
  }

  if (str1.length !== str2.length) return false;

  let chars = new Map();

  for (let i = 0; i < str1.length; ++i) {
    chars.set(str1[i], chars.get(str1[i]) + 1 || 1); // increment or set to 1
  }

  for (let i = 0; i < str2.length; ++i) {
    let count = chars.get(str2[i]);
    if (!count) return false;

    if (count === 1) {
      chars.delete(str2[i]);
    } else {
      chars.set(str2[i], count - 1);
    }
  }

  return chars.size === 0;
}

/**
 * Sort both strings and check if they are equal afterwards. Permutations will
 * be identical sorted strings.
 *
 * N = |str1| && M = |str2|
 * Time: O(N lg N + M lg M)
 * Additional space: O(1) if able to modify original strings, O(N + M) otherwise
 *
 * @param  {string[]} str2 First string, passed in as a character array
 * @param  {string[]} str1 Second string, passed in as a character array
 * @return {boolean}       True if first and second strings are permutations otherwise false
 */

function isPermutationSort(string1, string2) {
  if (string1.length !== string2.length) return false;
  return string1.split('').sort().join() === string2.split('').sort().join();
}


