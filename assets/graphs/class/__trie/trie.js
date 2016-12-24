
/**
* Trie
*
* A trie (sometimes called a prefix tree) is a kind of search tree where the keys
* are usually strings representing a single character at each node.
*
* They are also called prefix trees because all the descendants of a node have a
* common prefix of the string associated with that node. The root is associated
* with the empty string. No node in the tree stores the key associated with that
* node; instead, its position in the tree defines the key with which it is associated.
*
* Each node in a trie could have anywhere from 0 to ALPHABET_SIZE + 1 children or
* much more if you were to include common punctuation, perhaps the whole ASCII set.
*
* The result is a tree where each pathway down may represent a word. '*' nodes
* (sometimes called null nodes) are used to represent complete words.
*
* Common applications of tries include storing predictive text, autocomplete dictionary
* or spell checking, such as found on a mobile telephone.
*
* There are several ways to represent tries. Some implement nodes with an array
* of child pointers. We will, however, use nested objects.
*
*                             d
*                             ↓
*                             o
*                            ↙ ↘
*                          n     g
*/

class Trie {
  constructor() {
    this.root = {};
  }

  /**
  * insert()
  *
  * @param {string} word to insert
  * @return {void}
  */

  insert(word) {
    let current = this.root;
    let newWord = false;

    // work downwards through the trie, adding nodes as needed,
    // and keeping track of whether we add any nodes.
    for (let i = 0; i < word.length; i += 1) {
      const char = word[i];

      // if we don't have current char
      if (!current.hasOwnProperty(char)) {
        newWord = true;
        current[char] = {};
      }

      // traverse
      current = current[char];
    }

    // explicitly mark the end of a word
    if (!current.hasOwnProperty('*')) {
      newWord = true;
      current['*'] = {};
    }
  }
}

export default Trie;
