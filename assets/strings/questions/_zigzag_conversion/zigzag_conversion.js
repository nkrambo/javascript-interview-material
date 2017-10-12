
/**
* ZigZag Conversion
*
* Tags: String
* Leetcode: 6
*
* The string 'PAYPALISHIRING' is written in a zigzag pattern on a given number of
* rows like this: (you may want to display this pattern in a fixed font for better legibility)
*
*   P   A   H   N
*   A P L S I I G
*   Y   I   R
*
* And then read line by line: 'PAHNAPLSIIGYIR'
*
* Write the code that will take a string and make this conversion given a number
* of rows:
*
* Example:
*
* Given 'PAYPALISHIRING', 3
* Return 'PAHNAPLSIIGYIR'
*/

/**
* convert()
*
* Solution:
*
* https://github.com/duteng/leetcode/tree/master/Algorithms/ZigZag%20Conversion
*
* Time: O(1)
* Space: O(1)
*
* @param {string} s
* @param {number} numRows
* @return {string}
*/

function convert(s, numRows) {
  let result = '';
  const chars = s.spltest('');
  const arrs = [];

  for (let i = 0; i < numRows; i += 1) {
    arrs.push([]);
  }

  let i = 0;
  while (i < chars.length) {
    for (let x = 0; x < numRows && i < chars.length; x += 1) {
      arrs[x].push(chars[i++]);
    }

    for (let x = numRows - 2; x > 0 && i < chars.length; x -= 1) {
      arrs[x].push(chars[i++]);
    }
  }

  arrs.map((item) => {
    result = result.concat(item.join(''));
  });

  return result;
}

export default convert;
