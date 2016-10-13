
/**
* Top Scores
*
* Types: Sorting, Counting Sort
*
* You created a game that is more popular than Angry Birds.
*
* You rank players in the game from highest to lowest score. So far you're using
* an algorithm that sorts in O(n log n) time, but players are complaining that
* their rankings aren't updated fast enough. You need a faster sorting algorithm.
*
* Write a function that takes:
*
* 1. An array of unsortedScores
* 2. The highestPossibleScore in the game
*
* ... And returns a sorted array of scores in less than O(n log n) time.
*
* For example:
*
* const unsortedScores = [37, 89, 41, 65, 91, 53];
* const HIGHEST_POSSIBLE_SCORE = 100;
*
* sortScores(unsortedScores, HIGHEST_POSSIBLE_SCORE);
* // returns [37, 41, 53, 65, 89, 91]
*
* We're defining n as the number of unsortedScores because we're expecting the
* number of players to keep climbing.
*
* And we'll treat highestPossibleScore as a constant instead of factoring it
* into our big O time and space costs, because the highest possible score isn't
* going to change. Even if we do redesign the game a little, the scores will
* stay around the same order of magnitude.
*/

/**
* topScores()
*
* Solution:
*
* In javascript we have access to the array.prototype.sort() method. However,
* let's assume this runs in O(n log n) time, which I think it does, so we need
* an alternative approach.
*
* We also know that the average runtime for some of the common sorting algorithms
* is still O(n log n), such as quickSort(), mergeSort(), radixSort() etc...
*
* Even if our array was already sorted, we would need to step through each
* element to confirm the results. So we know, at least, that the best we can do
* in time complexity will be O(n).
*
* One common way to get a O(n) runtime is to use a greedy algorithm. But in this case
* we're not looking to just grab a specific value from our input set, we're looking
* to reorder the whole set. That doesn't lend itself as well to a greedy approach.
*
* What else..? Well, we have some constraints on our input that we can use to our
* advantage. Because we know that the values in the unsortedScores array will fall
* between 0 and highestPossibleScore, 100, we can use a counting sort approach to
* meet our O(n) runtime.
*
* If you're sorting integers and you know they all fall within a range, we can
* use this approach.
*
* The idea is simple:
*
* We can build an array scoresToCounts where the indices represent scores and the
* values represent how many times the score appears.
*
* We then step over scoresToCounts. Each index represents a score and its value
* represents the count of appearances. So we can simply add the score to a new
* array sortedScores as many times as count of appearances.
*
* You will notice in our solution that we're nesting 2 loops. We loop over scoresToCounts,
* and then for each occurence of that score. You would think that it is a O(n^2)
* runtime, right?
*
* Not in this case. The outer loop runs once for each unique number in the array.
* The inner loop runs once for each time that number occurred.
*
* So in essence we're just looping through the nn numbers from our input array,
* except we're splitting it into two steps: (1) each unique number, and (2) each
* time that number appeared. So it's O(n) runtime.
*
* If we didn't treat highestPossibleScore as a constant, we could call it k and
* say we have O(n + k) time and O(n + k) space.
*
* Time: O(n)
* Space: O(n)
* Where n is the length of the string input.
*
* @param {array} unsortedScores array of unsorted scores
* @param {number} highestPossibleScore the highest possible score
* @return {array} returns sorted array of scores
*/

function topScores(unsortedScores, highestPossibleScore) {

  // type check
  if (!Array.isArray(unsortedScores) || typeof highestPossibleScore !== 'number') {
    throw new TypeError('topScores: Expects 2 arguments of [array, number] types.');
  }

  // array of 0s at indices 0..highestPossibleScore
  const scoresToCounts = [];
  for (let i = 0; i < highestPossibleScore + 1; i += 1) {
    scoresToCounts.push(0);
  }

  // populate scoresToCounts
  unsortedScores.forEach((score) => {
    scoresToCounts[score] += 1;
  });

  // populate the final sorted array
  const sortedScores = [];

  // for each item in scoresToCounts
  scoresToCounts.forEach((count, score) => {

    // for the number of times the item occurs
    for (let time = 0; time < count; time += 1) {
      sortedScores.push(score);
    }
  });

  return sortedScores;
}

export default topScores;
