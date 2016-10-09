
/**
* Top Scores
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
* We're defining nn as the number of unsortedScores because we're expecting the
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
* Time: O(n)
* Space: O(n)
* Where n is the length of the string input.
*
* @param {array} unsortedScores array of unsorted scores
* @param {number} highestPossibleScore the highest possible score
* @return {array} returns sorted array of scores
*/

function topScores(unsortedScores, highestPossibleScore) {

}

export default topScores;
