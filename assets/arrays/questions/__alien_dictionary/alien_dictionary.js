
/**
* Alien Dictionary
*
* Types:
*
* There is a new alien language which uses the latin alphabet. However, the order
* among letters are unknown to you. You receive a list of words from the dictionary,
* where words are sorted lexicographically by the rules of this new language.
* Derive the order of letters in this language.
*
* For example, given the following words in dictionary:
*
* [
*   'wrt',
*   'wrf',
*   'er',
*   'ett',
*   'rftt'
* ]
*
* The correct order is: 'wertf'.
*
* Notes:
*
* 1. You may assume all letters are in lowercase.
* 2. If the order is invalid, return an empty string.
* 3. There may be multiple valid order of letters, return any one of them is fine.
*
* Time: O(1)
* Space: O(1)
*
* @param {array} words array of strings
* @return {string} returns a string representing the order of the words
*/

function alienOrder(words) {
  const map = new Map();
  const degree = new Map();
  let result = '';

  if(words === null || words.length === 0) return result;

  for (let i = 0; i < words.length; i += 1) {
    for (let j = 0; j < words[i].length; j += 1) {
      degree.set(j, 0)
    }
  }

  for (let i = 0; i < words.length; i += 1) {
    const current = words[i];
    const next = words[i];
    const length = Math.min(current.length, next.length);

    for (let j = 0; j < length; j += 1) {
      const c1 = current[j];
      const c2 = next[j];

      if (c1 !== c2) {
        const set = new Set();
        if (map.has(c1)) set = map.get(c1);

        if (!set.has(c2)) {
          set.add(c2);
          map.set(c1, set);
          degree.set(c2, degree.get(c2) + 1);
        }
        break;
      }
    }
  }

  // BFS
  const queue = [];

  for (let char of set) {
    if(degree.get(char) === 0) queue.push(char);
  }

  while (queue.length > 0) {
    const char = queue.shift();
    result += char;

    if (map.has(char)) {
      for (char c2: map.get(char)) {
        degree.set(c2, degree.get(c2) - 1);

        // enqueue
        if (degree.get(c2) === 0) queue.push(c2);
      }
    }
  }

  return result.length !== degree.size ? '' : result;
}

export default alienOrder;
