
/**
* Alien Dictionary
*
* Types: Topological Sort, Graph Traversal, BFS
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
* In essence, this is a topological sort problem and quite complicated at that.
* To tackle it, there are several steps we need to take. Let's break it down, step
* by step.
*
* In graph theory, the degree of a vertex (or node) is the number of edges incident
* to that vertex, with loops counted twice. In the below example, we can see that
* we have a graph of 6 nodes. 1 node is orphaned and has no edges, or a degree of
* 0. The other nodes have varying degrees, with one having a cycle (or loop) that
* we count twice.
*
*                 1 ---- 3 ------ 3
*                        |        |
*                        |        |
*                0       |        |
*                        2 ------ 4 --
*                                 |   | (loop)
*                                  ---
*
* The first step is to iterate over all the characters in our words array and build
* a degree map, which grabs each unique character from all the words and sets their
* degree to 0.
*
* So for our example input, this would result in:
*
* w: 0
* r: 0
* t: 0
* f: 0
* e: 0
*
* Notice how we're only grabbing each unique character value included in all the
* words no matter how many times they appear. These represent a single vertex.
*
* Then build the hashmap by comparing the adjacent words, the first character that
* is different between two adjacent words reflect the lexicographical order.
*
* For example:
*
* ['wrt', 'wrf']
* The first different character is the 3rd letter, so 't' comes before 'f'.
*
* ['wrf', 'er']
* The first different character is 1st letter, so 'w' comes before 'e'.
*
* To achieve this we must iterate over the words array again and grab each 'current'
* word and the 'next' (adjacent) word. Then we can further compare each character (c1, c2)
* at the same index (j) within words by iterating the minimum length of the shortest
* of the two, we don't process non-compareable values.
*
* If we come across two characters of different values at the same index then we
* process them. So, like we said earlier, if c1 and c2 are different then c1 must
* come before c2 in lexicographical order. To represent this in our graph, we use
* c1 as a 'key', which has a value of a set that contains all characters that come
* after it in order. So...
*
* x -> set: y
* means letter x comes before letter y.
*
* x -> set: y, z, t, w
* means x comes before all the letters in the set.
*
* Or, more specifically within our example. If we have:
*
* ['wrf', 'er']
*
* c1 !== c2, or 'w' !== 'e'
*
* Therefore, 'w' comes before 'e' lexicographically and add 'w' as a key to our
* graph and place 'e' in a set as it's value. If 'w' already exists as a key, we
* simply update/ add to the set value of characters that come after it.
*
* The final graph in our example looks like this...
*
* t -> set: f
* w -> set: e
* r -> set: t
* e -> set: r
*
* The final degree map looks like the following, with values representing how many
* letters come before the key:
*
* w: 0
* r: 1
* t: 1
* f: 1
* e: 1
*
* Then use Karn's aglorithm to do topological sort. This is essentially BFS.
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

  // build a degree map for each character in all the words
  const degree = new Map();
  for (let i = 0; i < words.length; i += 1) {
    const word = words[i];
    for (let j = 0; j < word.length; j += 1) {
      degree.set(word[j], 0);
    }
  }

  // build graph
  const graph = new Map();

  // grab adjacent words, that is, 'current' and 'next'
  for (let i = 0; i < words.length - 1; i += 1) {
    const current = words[i];
    const next = words[i + 1];
    const length = Math.min(current.length, next.length);

    // iterate adjacent words and compare characters at index j
    for (let j = 0; j < length; j += 1) {
      const c1 = current[j];
      const c2 = next[j];

      // if they are different
      if (c1 !== c2) {
        let set = new Set();

        // if we already have a set for this character,
        // assign set to existing set value for us to build upon
        if (graph.has(c1)) {
          set = graph.get(c1);
        }

        // only if we haven't already processed this c2 character:
        // add it to the set, then add set to graph, finally update degree values
        if(!set.has(c2)) {
          // update graph
          set.add(c2);
          graph.set(c1, set);

          // update degree
          degree.set(c2, degree.get(c2) + 1);
        }

        break;
      }
    }
  }

  // BFS (Karn's aglorithm) to find lexicographical order
  const queue = [];

  // grab a starting point by finding all nodes with no degree, or 0 edges
  // this should come first lexicographically
  for (let [key, value] of degree) {
    if (value === 0) queue.push(key);
  }

  while (queue.length > 0) {
    // dequeue
    const char = queue.shift();
    result += char;

    if (graph.has(char)) {
      const entries = graph.get(char);

      for (let c2 of entries) {
        // decrement degree
        degree.set(c2, degree.get(c2) - 1);

        // enqueue
        if (degree.get(c2) === 0) queue.push(c2);
      }
    }
  }

  return result.length !== degree.size ? '' : result;
}


export default alienOrder;
