
/**
* Word Squares
*
* Tags: Trie
*
* Given a set of words (without duplicates), find all word squares you can build
* from them.
*
* https://en.wikipedia.org/wiki/Word_square
*
* A sequence of words forms a valid word square if the kth row and column read
* the exact same string, where 0 ≤ k < max(numRows, numColumns).
*
* For example, the word sequence ['ball', 'area', 'lead', 'lady'] forms a word
* square because each word reads the same both horizontally and vertically.
*
*   b a l l
*   a r e a
*   l e a d
*   l a d y
*
* Note:
*
* 1. There are at least 1 and at most 1000 words.
* 2. All words will have the exact same length.
* 3. Word length is at least 1 and at most 5.
* 4. Each word contains only lowercase English alphabet a-z.
*
* Example 1:
*
* Given the following words ['area', 'lead', 'wall', 'lady', 'ball']
*
* Return:
*
* [
*   [ 'wall',
*     'area',
*     'lead',
*     'lady'
*   ],
*   [ 'ball',
*     'area',
*     'lead',
*     'lady'
*   ]
* ]
*
* The output consists of two word squares. The order of output does not matter
* (just the order of words in each word square matters).
*
* Example 2:
*
* Given the following words ['abat', 'baba', 'atan', 'atal']
*
* [
*   [ 'baba',
*     'abat',
*     'baba',
*     'atan'
*   ],
*   [ 'baba',
*     'abat',
*     'baba',
*     'atal'
*   ]
* ]
*
* The output consists of two word squares. The order of output does not matter
* (just the order of words in each word square matters).
*/

/**
* wordSquares()
*
* Solution:
*
*
* Time: O(1)
* Space: O(1)
*
* @param {array} words array of words to form words squares
* @return {array} returns an array of any word squares
*/

function wordSquares(words) {

}

export default wordSquares;
