
/**
* Find the Difference
*
* Types: Bit Manipulation
*
* Given two strings s1 and s2 which consist of only lowercase letters.
*
* String s2 is a random shuffling of string s1 but with one more letter at a
* random position.
*
* Find the random letter that was added in s2.
*
* Example:
* Input: 'abcd', 'abcde'
* Output: 'e'
* 'e' is the letter that was added.
*
* Solution:
*
* We can lean on the String.prototype.charCodeAt() method and some bit manipulation
* to handle this.
*
* The charCodeAt() method returns an integer between 0 and 65535 representing the
* UTF-16 code unit at the given string index. For example, 'a' is represented by
* 97, b is represented by 98 and so on.
*
* We know that there is only 1 character difference between s1 and s2. So, essentially
* all characters must 'balance', with the exception of 1 character in s2, which
* represents the 'un-balanced' character we're looking for.
*
* The bit manipulation is quite straight forward. We use a bitwise XOR assignment
* operator for comparing binary representations for each character's code.
*
* So how does this XOR work exactly?
*
* Well, if two bits are same, then result is 0, if two bits are not same the result
* is 1. In other words, the result is only true with 1 truth and 1 false. Such as:
*
* 1 ^ 1 = 0
* 0 ^ 0 = 0
* 0 ^ 1 = 1
* 1 ^ 0 = 1
*
* So, let's say we have two numbers that are the same, say [97, 97]. So these
* codes would represent 2 'a' characters.
*
* The bitwise XOR operation comparing these is:
*
* 1100001 ^ 1100001 = 0000000 // 97 ^ 97 = 0
*
* These cancel, or 'balance', each other out to equal 0. This is always the case
* when XOR two of the same binary numbers.
*
* However, if we introduce a different number say, 103, which is a 'g'. So we have
* [97, 103, 97]. Or in binary [1100001, 1100111, 1100001].
*
* If we do bitwise XOR operations starting from first number, we have:
*
* 1100001 ^ 1100111 = 0000110 // 97 ^ 103 = 6
* 0000110 ^ 1100001 = 1100111 // 6 ^ 97 = 103
*
* So... we end up with our final result 103, which is represents 'g', our unique
* character that we were looking for.
*
* The trick with XOR'ing all our consecutive values together is that, no matter
* what position they appear in a sequence, same numbers will 'cancel' each other
* out, or clear their bit representations, to equal 0. Essentially, 'toggling' their
* binary representations 'on' and 'off', for every even number it appears.
*
* If a number only appears once in a sequence, then it's binary representation will
* be kept 'in-tact' as it only appeared an odd number of times.
*
* So with this knowledge, we can easily build a solution.
*
* We know that s2 will always be 1 character longer than s1. If we want to iterate
* over s1 and s2 to compare charactets at each index, the last character of s2 will
* have no s1 index to compare to. It makes sense that we then make this our starting
* value of result, and then we can just iterate as normal. So that's what we do.
* We grab the last character of s2 and assign its code to result. Now we can just
* iterate the length of s1 and know that we haven't missed any characters in either
* string.
*
* As we iterate, we XOR our result and each character at s1 and s2 indices. At the
* end of all this, all 'balanced' characters will equal out to 0 and only the unique
* character from s2 will remain.
*
* We then return the string representation of this using the fromCharCode() method
* to convert back again from the char code.
*
* Time: O(n)
* Space: O(1)
*
* @param {string} s1 string of n length
* @param {string} s2 a random shuffling of s1 with an additional random letter
* @return {number} Returns the random letter from s2
*/

function findDifference(s1, s2) {
  // s2 is always 1 character longer than s1
  // grab the last of s2, now just iterate length of s1
  let result = s2.charCodeAt(s1.length);

  // iterate and eliminate 'balanced' characters through XOR
  for (let i = 0; i < s1.length; i += 1) {
    result ^= s1.charCodeAt(i) ^ s2.charCodeAt(i);
  }

  // return remaining 'unique' character as string
  return String.fromCharCode(result);
}

export default findDifference;
