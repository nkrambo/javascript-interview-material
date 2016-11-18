
/**
* Alien Dictionary
*
* Types: Topological Sort, Graph Traversal, DFS
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
* Solution:
*
* 
*
* Time: O(1)
* Space: O(1)
*
* @param {array} words array of strings
* @return {string} returns a string representing the order of the words
*/

function alienOrder(words) {
  let result = '';

  // type check
  if (!Array.isArray(words)) {
    throw new TypeError('alienOrder: Expects single argument of [array] type.');
  }

  // if empty
  if (words.length === 0) return result;

  // build graph
  const graph = new Map();

  for (let i = 0; i < words.length-1; i += 1) {
    const current = words[i];
    const next = words[i + 1];
    const length = Math.min(current.length, next.length);

    for (let j = 0; j < length; j += 1) {
      const c1 = current[j];
      const c2 = next[j];

      if (c1 !== c2) {
        const set = new Set();

        if (graph.has(c1)) {
          set = graph.get(c1);
        }

        if(!set.has(c2)) {
          set.add(c2);
          graph.set(c1, set);
          degree.set(c2, degree.get(c2) + 1);
        }

        break;
      }
    }
  }
}


export default alienOrder;
