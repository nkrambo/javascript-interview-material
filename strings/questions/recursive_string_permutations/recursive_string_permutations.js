
/**
* Recursive String Permutations
*
* Write a recursive function for generating all permutations of an input string.
* Return them as a set. Don't worry about time or space complexity—if we wanted
* efficiency we'd write an iterative version.
*
* To start, assume every character in the input string is unique.
*
* Your function can have loops—it just needs to also be recursive.
*/

/**
* recursivePerms()
*
* Solution:
*
* Let's break the problem into subproblems. How could we re-phrase the problem
* of getting all permutations for "cats" in terms of a smaller but similar
* subproblem?
*
* Let's make our subproblem be getting all permutations for all characters except
* the last one. If we had all permutations for 'cat' how could we use that to
* generate all permutations for 'cats'?
*
* We could put the 's' in each possible position for each possible permutation
* of 'cat'!
*
* These are our permutations of 'cat':
*
* cat
* cta
* atc
* act
* tac
* tca
*
* For each of them, we add 's' in each possible position. So for 'cat':
*
* cat
*   scat
*   csat
*   cast
*   cats
*
* And for 'cta':
*
* cta
*   scta
*   csta
*   ctsa
*   ctas
*
* And so on.
*
* Now that we can break the problem into subproblems, we just need a base case
* and we have a recursive algorithm!
*
* If we're making all permutations for 'cat', we take all permutations for 'ca'
* and then put 't' in each possible position in each of those permutations. We
* use this approach recursively:
*
* Time: O(n)
* Space: O(n)
* Where n is the length of the string input.
*
* @param {string} str string of (n) length
* @return {object} returns a set of all permutations of str
*/

function recursivePerms(str) {

  // base case
  if (str.length <= 1) {
    return new Set(str);
  }

  const chars = str.slice(0, -1); // all chars, except last
  const last = str[str.length - 1]; // last char

  // recursive call:
  // get permutations for all chars except last
  const permsOfChars = recursivePerms(chars);

  // put the last char in all possible positions
  // for each of the above permutations
  const permutations = new Set();
  permsOfChars.forEach((charPerm) => {
    for (let i = 0; i <= chars.length; i += 1) {
      permutations.add(charPerm.slice(0, i) + last + charPerm.slice(i));
    }
  });

  return permutations;
}

export default recursivePerms;
