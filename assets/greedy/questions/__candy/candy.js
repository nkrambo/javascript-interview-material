
/**
* Candy
*
* Types: Greedy
*
* There are N children standing in a line. Each child is assigned a rating value.
*
* You are giving candies to these children subjected to the following requirements:
*
* 1. Each child must have at least one candy.
* 2. Children with a higher rating get more candies than their neighbors.
*
* What is the minimum candies you must give?
*/

/**
* candy()
*
* Solution:
*
*
*
* Time: O(1)
* Space: O(1)
*
* @param {array} ratings children in line
* @return {number} returns candies that must be handed out
*/

// [0, 0, 0, 0, 0]; // 5
// [0, 1, 0, 0, 0]; // 6
// [1, 0, 0, 1, 1]; // 8
// [0, 1, 2, 3, 0]; // 11
// [0, 0, 1, 0, 3]; // 8

function candy(ratings) {

  if (ratings.length <= 1) return ratings.length;

  for (let i = 1; i < ratings.length; i += 1) {
    if (ratings[i] > ratings[i - 1]) {

    }
  }

  // let higestRating = ratings[0];
  // // let minCookies = ratings.length; // every child gets a minimum of 1
  // let minCookies = 0;
  // let handOut = 1; // every child gets a minimum of 1
  //
  // for (let i = 0; i < ratings.length; i += 1) {
  //
  //   if (higestRating < ratings[i]) {
  //     higestRating
  //     handOut += 1;
  //   }
  //
  //   // higestRating = Math.max(higestRating, ratings[i]);
  //
  //   minCookies += handOut;
  // }
  //
  // // highest rating so far
  // // if next i has a higher rating than higest give them extra cookie and increase highest rating
  //
  // return minCookies;
}

export default candy;
