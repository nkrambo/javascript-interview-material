
/**
* Dungeon Game
*
* Tags: Dynamic Programming, Binary Search
* Leetcode: 174
*
* The demons had captured the princess (P) and imprisoned her in the bottom-right
* corner of a dungeon. The dungeon consists of M x N rooms laid out in a 2D grid.
* Our valiant knight (K) was initially positioned in the top-left room and must
* fight his way through the dungeon to rescue the princess.
*
* The knight has an initial health point represented by a positive integer. If at
* any point his health point drops to 0 or below, he dies immediately.
*
* Some of the rooms are guarded by demons, so the knight loses health (negative integers)
* upon entering these rooms; other rooms are either empty (0's) or contain magic
* orbs that increase the knight's health (positive integers).
*
* In order to reach the princess as quickly as possible, the knight decides to
* move only rightward or downward in each step.
*
* Write a function to determine the knight's minimum initial health so that he is
* able to rescue the princess.
*
* Example:
*
* Given the dungeon below, the initial health of the knight must be at least 7 if
* he follows the optimal path RIGHT -> RIGHT -> DOWN -> DOWN.
*
* +-----------------------+
* | -2(k) |  -3   |   3   |
* +-----------------------+
* |  -5   |  -10  |   1   |
* +-----------------------+
* |  10   |   30  | -5(P) |
* +-----------------------+
*
* Notes:
*
* 1. The knight's health has no upper bound.
*
* 2. Any room can contain threats or power-ups, even the first room the knight
*    enters and the bottom-right room where the princess is imprisoned.
*/

/**
* calculateMinimumHP()
*
* Solution:
*
* https://leetcode.com/problems/dungeon-game/#/solutions
*
* Time: O(1)
* Space: O(1)
*
* @param {array} dungeon game matrix
* @return {number} returns the minimum health points needed to win game
*/

function calculateMinimumHP(dungeon) {

}

export default calculateMinimumHP;
