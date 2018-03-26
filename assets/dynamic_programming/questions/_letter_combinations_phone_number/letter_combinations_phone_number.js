
/**
* Letter Combinations of a Phone Number
*
* Tags: Backtracking, string
* Leetcode: 17
*
* Given a digit string, return all possible letter combinations that the number
* could represent.
*
* A mapping of digit to letters (just like on the telephone buttons) is given below.
*
*     [1]     [2]     [3]
*             abc     def
*
*     [4]     [5]     [6]
*     ghi     jkl     mno
*
*     [7]     [8]     [9]
*     pqrs    tuv     wxyz
*
*     [*]     [0]     [#]
*
* Example:
*
* Given '23'
* Return ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']
*
* Note:
*
* Although the above answer is in lexicographical order, your answer could be in
* any order you want.
*/

/**
* letterCombinations()
*
* Solution:
*
* This is a iterative solution. For each digit added, remove and copy every element
* in the queue and add the possible letter to each element, then add the updated
* elements back into queue again. Repeat this procedure until all the digits are
* iterated.
*
* This is basically the BFS solution, using a queue.
*
* Using our sampkle input:
*
* while()
*
* round 1 - ['']
* round 2 - ['a', 'b', 'c']
* round 3 - ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']
*
* Time: O(1)
* Space: O(1)
*
* @param {string} digits in string format
* @return {array} returns all the combinations of digits
*/

function letterCombinations(digits) {
  const queue = [];

  // catch edge
  if (!digits.length) return queue;

  // map our digits to strings representing their letters,
  // don't worry about 0 and 1
  const buttons = new Map();
  buttons.set('2', 'abc');
  buttons.set('3', 'def');
  buttons.set('4', 'ghi');
  buttons.set('5', 'jkl');
  buttons.set('6', 'mno');
  buttons.set('7', 'pqrs');
  buttons.set('8', 'tuv');
  buttons.set('9', 'wxyz');

  // kick off our queue, min length of 1
  queue.push('');

  for (let i = 0; i < digits.length; i += 1) {
    const letters = buttons.get(digits[i]);

    // peek
    while (queue[0].length === i) {
      const row = queue.shift(); // dequeue

      // build our result by re-queueing
      for (const l of letters) {
        queue.push(row + l);
      }
    }
  }

  return queue;
}

function letterCombinationsBT(digits) {
  const combos = [];

  // catch edge
  if (!digits.length) return combos;

  const local = '';

  // map our digits to strings
  const buttons = new Map();
  buttons.set('2', 'abc');
  buttons.set('3', 'def');
  buttons.set('4', 'ghi');
  buttons.set('5', 'jkl');
  buttons.set('6', 'mno');
  buttons.set('7', 'pqrs');
  buttons.set('8', 'tuv');
  buttons.set('9', 'wxyz');

  backtrack(buttons, combos, local, 0, digits);

  return combos;
}

function backtrack(buttons, combos, local, index, digits) {
  // base case
  if (index === digits.length) {
    combos.push(local);
  } else {
    for (let i = 0; i < buttons.get(); i += 1) {
      local.concat(buttons); // add character to end
      backtrack(buttons, combos, local, index + 1, digits); // recurse and bump index
      local = local.substring(0, local.length - 1); // remove last character
    }
  }

  //         if(index==digits.size())
  //             res.push_back(local);
  //         else
  //             for(int i=0;i<table[digits[index]-'0'].size();i++) {
  //                 local.push_back(table[digits[index]-'0'][i]);
  //                 backtracking(table, res, local, index+1, digits);
  //                 local.pop_back();
  //             }
}

// class Solution {
// public:
//     vector<string> letterCombinations(string digits)
//     {
//         vector<string> res;
//         if(digits.size()==0) return res;
//         string local;
//         vector<vector<char>> table(2,vector<char>());
//         table.push_back(vector<char>{'a','b','c'}); // index 2
//         table.push_back(vector<char>{'d','e','f'}); // 3
//         table.push_back(vector<char>{'g','h','i'});
//         table.push_back(vector<char>{'j','k','l'}); // 5
//         table.push_back(vector<char>{'m','n','o'});
//         table.push_back(vector<char>{'p','q','r','s'}); // 7
//         table.push_back(vector<char>{'t','u','v'});
//         table.push_back(vector<char>{'w','x','y','z'}); // 9
//
//         backtracking(table,res,local,0,digits);
//         return res;
//     }
//
//     void backtracking(const vector<vector<char>>& table, vector<string>& res, string& local, int index, const string& digits) {

//     }
// };

export { letterCombinations, letterCombinationsBT };
