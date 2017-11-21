
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
* There are 26 characters in the english alphabet, not including any punctuation.
* That means, that at each level we could potentially have an object representing
* each character. That is, 26 starting characters, and then each of those may have
* their own 26 characters, 26^2 and they may all have 26 characters 26^3 and so on.
* This gives us a space complexity of 26^n for all words of length n or fewer.
*
* Tries are really designed for efficient retrievals. In fact, we can retrieve a
* word from a Trie in n time, where n is the length of the word. This is because
* we implement our class with nested objects, giving us constant lookups at each
* level of the prefix.
*
* The 3 most common operations of a Trie are:
*
* 1. Insert
* 2. Search
* 3. Remove
* 4. Starts With
*
* Inserting a word is fairly straight forward. We start from the root and traverse
* downward through our trie checking at each level if we have the current character
* our word, if we don't we add it and keep going.
*
* Searching for a word is easier. We take a similiar approach to insert, but we
* return false as soon as we hit a non-existent character.
*
* We are also implementing a method to retrieve an array of all words in the Trie.
*
* https://www.youtube.com/watch?v=zIjfhVPRZCg
*
* Time: O(n)
* Space: O(26^n)
*
* Where n is the length of the word.
*/

class Trie {
  constructor() {
    this.root = {};
    this.words = [];
  }

  /**
  * insert word
  *
  * @param {string} word
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
      this.words.push(word);
    }
  }

  /**
  * remove word
  *
  * @param {string} word
  * @return {void}
  */

  remove(word) {

  }

//   if (index == word.length()) {
//        //when end of word is reached only delete if currrent.endOfWord is true.
//        if (!current.endOfWord) {
//            return false;
//        }
//        current.endOfWord = false;
//        //if current has no other mapping then return true
//        return current.children.size() == 0;
//    }
//    char ch = word.charAt(index);
//    TrieNode node = current.children.get(ch);
//    if (node == null) {
//        return false;
//    }
//    boolean shouldDeleteCurrentNode = delete(node, word, index + 1);
//
//    //if true is returned then delete the mapping of character and trienode reference from map.
//    if (shouldDeleteCurrentNode) {
//        current.children.remove(ch);
//        //return true if no mappings are left in the map.
//        return current.children.size() == 0;
//    }
//    return false;
// }

  /**
  * check for a word
  *
  * @param {string} word
  * @return {boolean} returns true if exists, otherwise false
  */

  search(word) {
    let current = this.root;

    for (let char of word) {
      // char not found
      if (!current.hasOwnProperty(char)) return false;

      // keep traversing
      current = current[char];
    }

    // check for end of word
    return current.hasOwnProperty('*');
  }

  /**
  * check for a prefix
  *
  * @param {string} prefix
  * @return {boolean} returns true a word exists with prefix
  */

  startsWith(prefix) {

  }

  /**
  * getWords()
  *
  * @return {array} of all words
  */

  getWords() {
    return this.words;
  }
}

export default Trie;
