
/**
* Word Cloud Data
*
* You want to build a word cloud, an infographic where the size of a word
* corresponds to how often it appears in the body of text.
*
* To do this, you'll need data. Write code that takes a long string and builds
* its word cloud data in a map ↴ , where the keys are words and the values are
* the number of times the words occurred.
*
* We'll use a JavaScript Map instead of an object because it's more explicit —
* we're mapping words to counts. And it'll be easier and cleaner when we want to
* iterate over our data.
*
* Think about capitalized words. For example, look at these sentences:
*
* 'After beating the eggs, Dana read the next step:'
* 'Add milk and eggs, then add flour and sugar.'
*
* What do we want to do with 'After', 'Dana', and 'add'? In this example, your
* final map should include one 'Add' or 'add' with a value of 22. Make reasonable
* (not necessarily perfect) decisions about cases like 'After' and 'Dana'.
*
* Assume the input will only contain words and standard punctuation.
*
* You could make a reasonable argument to use regex in your solution. We won't,
* mainly because performance is difficult to measure and can get pretty bad.
*
* Solution:
*
* This challenge has several parts. Let's break them down.
*
* 1. Splitting the words from the input string
* 2. Populating the map with each word
* 3. Handling words that are both uppercase and lowercase in the input string
*
* Attacking number 1 first... We could use the built-in split() function, to separate
* words but if we split on the spaces, like string.split(''), but this would present
* issues with any punctuation we come across. Consider things like exclaimation marks,
* hyphens, ellipses, commas etc... We don't want these in our cloud. Instead, let's
* write our own split function so that we can iterate only once and include only
* those words we want easily.
*
* We'll also need a helper function that will let us check if our current character is
* a letter or not. We can write isLetter(), which uses a simple regular expression.
*
* Now we've solved the first part of the challenge, splitting the words. The next
* part is populating our map with unique words.
*
* If the word is in the map, we'll increment its count. Otherwise, we'll add it
* to the map with a count of 1. Pretty easy...
*
* To handle uppercase and lowercase we have a few options:
*
* Consider these sentences:
*
* 'We came, we saw, we ate cake.'
* 'Friends, Romans, countrymen! Let us eat cake.'
* 'New tourists in New York often wait in long lines for cronuts.'
*
* Here are a few options:
*
* 1. Only make a word uppercase in our map if it is always uppercase in the original string.
*
* 2. Make a word uppercase in our map if it is ever uppercase in the original string.
*
* 3. Make a word uppercase in our map if it is ever uppercase in the original string
*    in a position that is not the first word of a sentence.
*
* 4. Use an API or other tool that identifies proper nouns.
*
* 5. Ignore case entirely and make every word lowercase.
*
* These are all resonabale approaches.
*
* We want to avoid duplicating words with different cases. We can make a word
* uppercase in our map only if it is always uppercase in the original string.
* While this is a reasonable approach, it is imperfect (consider proper nouns that
* are also lowercase words, like 'Bill' and 'bill'). As in, 'Bill asked for the bill.'
*
* So, we populate the words in our map as they are identified, checking if the
* word is already in our map in its current case or another case.
*
* If the input word is uppercase and there's a lowercase version in the map, we
* increment the lowercase version's count. If the input word is lowercase and
* there's an uppercase version in the map, we 'demote' the uppercase version by
* adding the lowercase version and giving it the uppercase version's count.
*
* To tie all this functionality together, we wrap it all in a class.
*
* Time: O(n)
* Space: O(n)
* Where n is the length of string.
*
* This is the best we can do because we have to look at every character in the
* input string and we have to return a map of every unique word. We optimized to
* only make one pass over our input and have only one O(n) data structure.
*/

class WordCloudData {
  constructor(string) {
    this.cloud = new Map();
    this.populateCloud(string);
  }

  populateCloud(string) {
    // iterates over each character in the input string, splitting
    // words and passing them to this.addToCloud()
    let word = '';
    for (let i = 0; i < string.length; i += 1) {
      const char = string.charAt(i);

      // if we reached the end of the string we check if the last
      // character is a letter and add the last word to our map
      if (i === string.length - 1) {
        if (this.isLetter(char)) word += char;
        if (word.length) this.addToCloud(word);

      // if we reach a space or emdash we know we're at the end of a word
      // so we add it to our map and reset our current word
      } else if (char === ' ' || char === '\u2014') {
        if (word.length) this.addToCloud(word);
        word = '';

      // we want to make sure we split on ellipses so if we get two periods in
      // a row we add the current word to our map and reset our current word
      } else if (char === '.') {
        if (i < string.length - 1 && string.charAt(i + 1) === '.') {
          if (word.length) this.addToCloud(word);
          word = '';
        }

      // if the character is a letter or an apostrophe, we add it to our current word
      } else if (this.isLetter(char) || char === '\'') {
        word += char;

      // if the character is a hyphen, we want to check if it's surrounded by letters
      // if it is, we add it to our current word
      } else if (char === '-') {
        if (i > 0 && this.isLetter(string.charAt(i - 1)) && this.isLetter(string.charAt(i + 1))) {
          word += char;
        }
      }
    }
  }

  addToCloud(word) {
    let count;

    // if the word is already in the map we increment its count
    if (this.cloud.has(word)) {
      count = this.cloud.get(word) + 1;
      this.cloud.set(word, count);

    // if a lowercase version is in the map, we know our input word must be uppercase
    // but we only include uppercase words if they're always uppercase
    // so we just increment the lowercase version's count
    } else if (this.cloud.has(word.toLowerCase())) {
      count = this.cloud.get(word.toLowerCase()) + 1;
      this.cloud.set(word.toLowerCase(), count);

    // if an uppercase version is in the map, we know our input word must be lowercase.
    // since we only include uppercase words if they're always uppercase, we add the
    // lowercase version and give it the uppercase version's count
    } else if (this.cloud.has(this.capitalize(word))) {
      count = this.cloud.get(this.capitalize(word)) + 1;
      this.cloud.set(word, count);
      this.cloud.delete(this.capitalize(word));

    // otherwise, the word is not in the map at all, lowercase or uppercase
    // so we add it to the map
    } else {
      this.cloud.set(word, 1);
    }
  }

  isLetter(char) {
    return char.match(/[a-zA-Z]/);
  }

  capitalize(word) {
    return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
  }
}

export default WordCloudData;
