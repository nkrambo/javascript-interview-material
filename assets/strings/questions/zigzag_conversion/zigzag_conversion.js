
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
* The idea is to traverse the input string. Every character has to go to one of
* the rows. One by one add all characters to different rows.
*
* We essentially traverse in a 'DOWN' method and then in an 'UP' method and repeat.
*
* Travelling 'DOWN' is trivial. We simply push the i(th) value onto the next row
* array. In our above example, we have 3 rows, so we would iterate downward for
* 3 characters... pretty simple.
*
* When we travel 'UP', it's the number of rows - 2, which accounts for the first
* and last row. This makes sense because the first and last row will always be
* in the 'DOWN' direction.
*
* Look at the first 'UP' traversal in our example, we only count 'P'. This logic
* scales with the number of rows, we always exclude the first and last for n rows.
*
* Once we have iterated the entire string we concat and join all our rows together
* and return the result.
*
* https://github.com/duteng/leetcode/tree/master/Algorithms/ZigZag%20Conversion
* http://www.geeksforgeeks.org/print-concatenation-of-zig-zag-string-form-in-n-rows/
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
  const chars = s.split('');
  const arrs = [];

  // for every row push a new empty array
  for (let i = 0; i < numRows; i += 1) {
    arrs.push([]);
  }

  let i = 0;
  while (i < chars.length) {
    for (let x = 0; x < numRows && i < chars.length; x += 1) {
      arrs[x].push(chars[i]);
      i += 1;
    }

    for (let x = numRows - 2; x > 0 && i < chars.length; x -= 1) {
      arrs[x].push(chars[i]);
      i += 1;
    }
  }

  // join all the rows up
  arrs.forEach((item) => {
    result = result.concat(item.join(''));
  });

  return result;
}

export default convert;
