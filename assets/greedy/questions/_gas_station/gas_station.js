
/**
* Gas Station
*
* Tags: Greedy
* Leetcode: 134
*
* There are N gas stations along a circular route, where the amount of gas at
* station i is gas[i].
*
* You have a car with an unlimited gas tank and it costs cost[i] of gas to travel
* from station i to its next station (i + 1). You begin the journey with an empty
* tank at one of the gas stations.
*
* Return the starting gas station's index if you can travel around the circuit once,
* otherwise return -1.
*
* Note:
*
* The solution is guaranteed to be unique.
*/

/**
* canCompleteCicuit()
*
* Solution:
*
*
*
* Time: O(1)
* Space: O(1)
*
* @param {array} gas stations, with amount of gas at each station
* @param {array} cost of gas to travel from gas[i] to gas[i + 1]
* @return {number} returns the starting station's index if circuit is possible, otherwise -1
*/

// function canCompleteCicuit(gas, cost) {
//   let start = gas.length - 1;
//   let end = 0;
//   let sum = gas[start] - cost[start];
//
//   while (start > end) {
//      if (sum >= 0) {
//         sum += gas[end] - cost[end];
//         end += 1;
//      } else {
//         start -= 1;
//         sum += gas[start] - cost[start];
//      }
//   }
//
//   return sum >= 0 ? start : -1;
// }
//
// export default canCompleteCicuit;
