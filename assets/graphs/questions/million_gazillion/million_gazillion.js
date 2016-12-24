
/**
* Million Gazillion
*
* Types: Trie
*
* I'm making a search engine called MillionGazillion™.
*
* I wrote a crawler that visits web pages, stores a few keywords in a database,
* and follows links to other web pages. I noticed that my crawler was wasting a
* lot of time visiting the same pages over and over, so I made a set, visited,
* where I'm storing URLs I've already visited. Now the crawler only visits a URL
* if it hasn't already been visited.
*
* Thing is, the crawler is running on my old desktop computer in my parents' basement
* (where I totally don't live anymore), and it keeps running out of memory because
* visited is getting so huge.
*
* How can I trim down the amount of space taken up by visited?
*
* Solution:
*
* Notice that a boatload of URLs start with 'www.'
*
* We could make visited a nested object where the outer key is the subdomain and
* the inner key is the rest of the URL, so for example visited['www.']['google.com'] = true
* and visited['www.']['interviewcake.com'] = true. Now instead of storing the 'www.'
* for each of these URLs, we've just stored it once in memory. If we have 1,000
* URLs and half of them start with 'www.' then we've replaced 500 * 4500 ∗ 4
* characters with just 4 characters in memory.
*
* But we can do even better.
*
* What if we made the prefixes just one character? We can use a trie!
*
* Let's make visited a nested object where each map has keys of just one character.
* So we would store 'google.com' as visited['g']['o']['o']['g']['l']['e']['.']['c']['o']['m']['*'] = true.
*
* The '*' at the end means 'this is the end of an entry'. Otherwise we wouldn't
* know what parts of visited are real URLs and which parts are just prefixes.
* In the example above, 'google.co' is a prefix that we might think is a visited
* URL if we didn't have some way to mark 'this is the end of an entry.'
*
* Now when we go to add 'google.com/maps' to visited, we only have to add the
* characters '/maps', because the 'google.com' prefix is already there. Same with
* 'google.com/about/jobs'.
*
* We can visualize this as a tree, where each character in a string corresponds
* to a node. To check if a string is in the trie, we just descend from the root
* of the tree to a leaf, checking for a node in the tree for each character of in string.
*
* There are lots of ways to implement a Trie, nested objects, nodes and pointers,
* or some combination of the two, for example.
*
* We'll use nested objects. We just call checkOrAdd(), which checks if a given
* string is present in the trie and adds it to the trie if it's not.
*
* Time: O(n * m)
* Space: O(26^n)
*
* Every time you traverse a string and add it to the existing structure, we perform
* a few operations like initializing. This is however, a constant time operation.
* It takes O(1) to create a new node. It is not necessarily O(1) but O(C) where C is a constant.
*
* This is repeated in the worst case for all the strings with length m.
* Here m would be the length of the longest string (worst case complexity) which
* would be repeated for all the strings and hence )(n * m) time.
*
* For simplicity sake, let's ignore non-alphabetic characters, sticking to the
* standard 26 English letters in lowercase.
*
* How many characters might be stored in our trie?
*
* Well, the first layer can have up to 26 nodes (and thus 26 characters), one for
* each possible starting character. On the second layer, each of those 26 nodes
* could have 26 children, the third layer.. same thing. Hence, O(26^n)
*/

class MillionGazillion {
  constructor() {
    this.root = {};
  }

  checkOrAdd(url) {
    let current = this.root;
    let newWord = false;

    // work downwards through the trie, adding nodes as needed,
    // and keeping track of whether we add any nodes.
    for (let i = 0; i < url.length; i += 1) {
      const char = url[i];

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

    return newWord;
  }
}

export default MillionGazillion;
