
/**
* Binary Watch
*
* Tags: Bit Manipulation, Backtracking
* Leetcode: 401
*
* A binary watch has 4 LEDs on the top which represent the hours (0-11), and the
* 6 LEDs on the bottom represent the minutes (0-59).
*
* Each LED represents a zero or one, with the least significant bit on the right.
*
* For example, the below binary watch reads '3:25'.
*
* [8, 4, 2, 1]  hrs
* [0, 0, 1, 1]  3
*
* [32, 16, 8, 4, 2, 1]  mins
* [0,   1, 1, 0, 0, 1]  25
*
* Given a non-negative integer num which represents the number of LEDs that are
* currently on, return all possible times the watch could represent.
*
* Example:
* Input: 1
* Output: ['1:00', '2:00', '4:00', '8:00', '0:01', '0:02', '0:04', '0:08', '0:16', '0:32']
*
* Notes:
*
* 1. The order of output does not matter.
*
* 2. The hour must not contain a leading zero, for example '01:00' is not valid,
*    it should be '1:00'.
*
* 3. The minute must be consist of two digits and may contain a leading zero, for
*    example '10:2' is not valid, it should be '10:02'.
*
* Time: O(1)
* Space: O(1)
*
* @param {number} num 32-bit unsigned integer
* @return {array} Returns all the possible times that num could represent
*/

// function readBinaryWatch(num) {
//
// }
//
// export default readBinaryWatch;
