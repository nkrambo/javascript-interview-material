
/**
* Palindrome Number
*
* Tags: Math
* Leetcode: 9
*
* Determine whether an integer is a palindrome. Do this without extra space.
*
* Some hints:
*
* Could negative numbers be palindromes? (ie, -1)
*
* If you are thinking of converting the integer to string, note the restriction
* of using extra space.
*
* You could also try reversing an integer. However, if you have solved the problem
* "Reverse Integer", you know that the reversed integer might overflow. How would
* you handle such a case?
*
* There is a more generic way of solving this problem.
*/

/**
* isPalindrome()
*
* Solution:
*
*
* Time: O(log(10) n)
* Space: O(1)
*
* We divided the input by 10 for every iteration, so the time complexity is O(log(10) n)
*
* @param {number} x
* @return {boolean}
*/

function isPalindrome1(x) {
  x += '';
  let i = 0;
  let j = x.length - 1;

  while(i < j) {
    if (x[i] !== x[j]) return false

    i += 1;
    j -= 1;
  }

  return true;
}

function isPalindrome2(x) {
  if (x < 0) return false;

  let div = 1;

  // it means that the div is still a valid divider
  // e.g 600 the divider should be 100 at maximum
  // e.g. 90 the divider should be 10 at maximum
  // e.g. 1 the divider should be a 1 at maximum
  while (parseInt(x/div) >= 10) {
    div *= 10;
  }

  let left, right;

  // when div === 1 it means the digit only has one value to examine
  // e.g. 121 -> only 2 is left for examine which can be ignore
  // e.g. 1 -> 1
  // e.g. 43234 -> 2
  while (div > 1) {
    left = parseInt(x / div);
    right = x % 10;

    if (left !== right) {
      return false;
    }

    x = x % div; // remove the left most digit
    x = parseInt(x / 10); // remove the right most digit
    div /= 100;
  }

  return true;
}

export { isPalindrome1, isPalindrome2 };
