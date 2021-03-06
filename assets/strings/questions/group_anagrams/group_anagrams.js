
/**
* Group Anagrams
*
* Tags: Map, String
* Leetcode: 49
*
* Given an array of strings, group anagrams together.
*
* Example:
*
* Given: ["eat", "tea", "tan", "ate", "nat", "bat"]
* Return:
* [
*   ["ate", "eat","tea"],
*   ["nat","tan"],
*   ["bat"]
* ]
*
* Note: All inputs will be in lower-case.
*/

/**
* Solution:
*
* This problems asks us to group the strings in an array such that the anagrams
* appear next to each other. Note that no specific ordering of the words is required,
* other than this.
*
* We need a quick and easy way of determining if two strings are anagrams of each
* other. What defines if two words are anagrams of each other? Well, anagrams are
* words that have the same characters but in different orders. It follows then that
* if we can put the characters in the same order, we can easily check if the new
* words are identical.
*
* One way to do this is to just apply any standard sorting algorithm, like merge
* sort or quick sort, and modify the comparator. This comparator will be used to
* indicate that two strings which are anagrams of each other are equivalent.
*
* What's the easiest way of checking if two words are anagrams? We could count the
* occurences of all the distinct characters in each string and return true if they
* match. Or, we could just sort the string. After all, two words which are anagrams
* will look the same once they're sorted.
*
* Because we are using javascript, we have access to the Array.sort() method.
*
* Now to group the strings in the array by anagram. We can do this using a hash
* table which maps from one sorted version of a word to a list of its anagrams.
* So, for example, 'acre' will map to the list {'acre', 'race', 'care'}. Once we've
* grouped all the words into these lists by anagram, we can then put them back into
* the array.
*
* @param {string[]} strs
* @return {string[][]}
*
* Time: O(n log n)
* Space: O(n)
*
* Sorting each word using the sort() method puts our runtime at O(n log n). Also,
* we're using a hash map so our space complexity will be O(n).
*/

function groupAnagrams(strs) {
  const map = new Map();

  // group words by anagram
  for (let i = 0; i < strs.length; i += 1) {
    const key = strs[i].split('').sort().join('');

    // if we have the key concat our anagram
    if (map.has(key)) {
      map.set(key, map.get(key).concat([strs[i]]));
    } else {
      map.set(key, [strs[i]]);
    }
  }

  // convert hash to array
  let index = 0;
  for (const list of map.values()) {
    for (const word of list) {
      strs[index] = word;
      index += 1;
    }
  }
}

export default groupAnagrams;
