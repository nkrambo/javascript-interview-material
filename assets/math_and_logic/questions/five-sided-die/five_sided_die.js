
/**
* Five Sided Die
*
* You have a function rand7() that generates a random integer from 1 to 7. Use it
* to write a function rand5() that generates a random integer from 1 to 5.
*
* rand7() returns each integer with equal probability. rand5() must also return
* each integer with equal probability.
*/

/**
* rand5()
*
* Solution:
*
* Your first thought might be to simply take the result of rand7() and take a modulus:
*
* function rand5() {
*   return rand7() % 5 + 1;
* }
*
* However, this won't give an equal probability for each possible result. We can
* write out each possible result from rand7() (each of which is equally probable,
* per the problem statement) and see that some results for rand5() are more likely
* because they are caused by more results from rand7():
*
*           rand7()	 |   rand5()
*         ------------------------
*             1	     |     2
*             2	     |     3
*             3	     |     4
*             4      |     5
*             5	     |     1
*             6	     |     2
*             7	     |     3
*
* So we see that there are two ways to get 2 and 3, but only one way to get 1, 4,
* or 5. This makes 2 and 3 twice as likely as the others.
*
* rand5() must return each integer with equal probability, but we don't need to
* make any guarantees about its runtime...
*
* In fact, the solution has a small possibility of never returning... We simply
* 're-roll' whenever we get a number greater than 5. So each integer 1, 2, 3, 4,
* or 5 has a probability 1/7 of appearing at each roll.
*
* Time: O(infinite)
* Space: O(1)
* We might keep re-rolling forever.
*
* This kind of math is generally outside the scope of a coding interview, but:
* if you know a bit of number theory you can prove that there exists no solution
* which is guaranteed to terminate.
*
* Making sure each possible result has the same probability is a big part of what
* makes this one tricky.
*
* @return {returns} returns a random number between 1 - 5.
*/

function rand5() {
  let result = 7; // arbitrarily large
  while (result > 5) {
    result = rand7();
  }
  return result;
}

/**
* rand7()
*
* @return {number} returns a random number between 1 - 7.
*/

function rand7() {
  return Math.floor(Math.random() * (7 - 1 + 1)) + 1;
}

export { rand5, rand7 };
