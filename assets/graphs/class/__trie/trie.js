
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
*                             d                         words:
*                             ↓                         - do
*                             o → *                     - don't
*                            ↙ ↘                        - dog
*                          n     g → *                  - dogs
*                        ↙   ↘     ↘                    - done
*                       '      e     s
*                    ↙           ↘     ↘
*                  t               *     *
*                ↙
*              *
*
* Inserting a word is fairly straight forward. We start from the root and traverse
* downward through our trie checking at each level if we have the current character
* our word, if we don't we add it and keep going.
*
* https://www.youtube.com/watch?v=zIjfhVPRZCg
*
* There are 26 characters in the english alphabet, not including any punctuation.
* That means, that at each level we could potentially have an object representing
* each character. That is, 26 starting characters, and then each of those may have
* their own 26 characters, 26^2 and they may all have 26 characters 26^3 and so on.
* This gives us a space complexity of 26^n for all words of length n or fewer.
*
* Time: O(1)
* Space: O(26^n)
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

    // work downwards through the trie, adding nodes as needed,
    // and keeping track of whether we add any nodes.
    for (let char of word) {
      // if we don't have current char
      if (!current.hasOwnProperty(char)) {
        current[char] = {};
      }

      // traverse
      current = current[char];
    }

    // explicitly mark the end of a word
    if (!current.hasOwnProperty('*')) {
      current['*'] = {};
    }
  }

  /**
  * remove()
  *
  * @param {string} word to remove
  * @return {void}
  */

  remove(word) {

  }

  /**
  * contains()
  *
  * @param {string} word to check for
  * @return {void}
  */

  contains(word) {

  }

  /**
  * getWords()
  *
  * @return {array} of all words
  */

  getWords() {

  }
}

export default Trie;
