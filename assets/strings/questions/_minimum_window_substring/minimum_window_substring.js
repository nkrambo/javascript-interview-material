
/**
* Minimum Window Substring
*
* Tags: Map, Two Pointers, String
* Leetcode: 76
*
* Given a string S and a string T, find the minimum window in S which will
* contain all the characters in T in complexity O(n).
*
* Example:
*
* Given: 'ADOBECODEBANC', 'ABC'
* Return: 'BANC'
*
* Notes:
*
* If there is no such window in S that covers all characters in T, return
* an empty string ''.
*
* If there are multiple such windows, you are guaranteed that there will always
* be only one unique minimum window in S.
*/

/**
* minWindow()
*
* Solution:
*
* Time: O(1)
* Space: O(1)
*
* @param {string} s base string
* @param {string} t string to find in base string
* @return {string} returns the minimum window in s, containing t
*/

// function minWindow(s, t) {
//   const map = new Map();
//   let counter = t.length;
//   let begin = 0;
//   let end = 0;
//
//   // count chars in t
//   for (let char of t) {
//     map.set(char, map.get(char) + 1 || 1) // increment by or set to 1
//   }
// }

// string minWindow(string s, string t) {
//         vector<int> map(128,0);
//         for(auto c: t) map[c]++;
//         int counter=t.size(), begin=0, end=0, d=INT_MAX, head=0;
//         while(end<s.size()){
//             if(map[s[end++]]-->0) counter--; //in t
//             while(counter==0){ //valid
//                 if(end-begin<d)  d=end-(head=begin);
//                 if(map[s[begin++]]++==0) counter++;  //make it invalid
//             }
//         }
//         return d==INT_MAX? "":s.substr(head, d);
//     }

// export default minWindow;
