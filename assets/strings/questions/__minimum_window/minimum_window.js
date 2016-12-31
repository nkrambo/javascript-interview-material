
/**
* Minimum Window String
*
* Given a string str1 and a string str2, find the minimum window in str1 which
* will contain all the characters in str2 in complexity O(n).
*
* Example:
* Input: 'ADOBECODEBANC', 'ABC'
* Output: 'BANC'
*
* Notes:
* If there is no such window in str1 that covers all characters in str2, return
* an empty string ''.
*
* If there are multiple such windows, you are guaranteed that there will always
* be only one unique minimum window in str1.
*/

/**
* minimumWindow()
*
* Solution:
*
* Time: O(1)
* Space: O(1)
*
* @param {string} str1 base string
* @param {string} str2 string to find in base string
* @return {string} returns the minimum window in str1, containing str2
*/

function minimumWindow(str1, str2) {
  const map = new Map();
  let counter = str2.length;
  let begin = 0;
  let end = 0;

  // count chars in str2
  for (let char of str2) {
    map.set(char, map.get(char) + 1 || 1) // increment by or set to 1
  }

  while (end < str1.length) {
    if ()

    while (counter === 0) {
      if () {}
      if () {}
    }
  }
}

string minWindow(string s, string t) {
        vector<int> map(128,0);
        for(auto c: t) map[c]++;
        int counter=t.size(), begin=0, end=0, d=INT_MAX, head=0;
        while(end<s.size()){
            if(map[s[end++]]-->0) counter--; //in t
            while(counter==0){ //valid
                if(end-begin<d)  d=end-(head=begin);
                if(map[s[begin++]]++==0) counter++;  //make it invalid
            }
        }
        return d==INT_MAX? "":s.substr(head, d);
    }

export default minimumWindow;
