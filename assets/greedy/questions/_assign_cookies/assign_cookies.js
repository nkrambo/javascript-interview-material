
/**
* Assign Cookies
*
* Tags: Greedy
* Leetcode: 455
*
* Assume you are an awesome parent and want to give your children some cookies.
* But, you should give each child at most one cookie. Each child i has a greed
* factor gi, which is the minimum size of a cookie that the child will be content
* with; and each cookie j has a size sj.
*
* If sj >= gi, we can assign the cookie j to the child i, and the child i will be
* content. Your goal is to maximize the number of your content children and output
* the maximum number.
*
* Note:
*
* 1. You may assume the greed factor is always positive.
* 2. You cannot assign more than one cookie to one child.
*
* Example 1:
*
* Given [1, 2, 3], [1, 1]
* Return 1
*
* You have 3 children and 2 cookies. The greed factors of 3 children are 1, 2, 3.
* And even though you have 2 cookies, since their size is both 1, you could only
* make the child whose greed factor is 1 content. You need to output 1.
*
* Example 2:
*
* Given [1, 2], [1, 2, 3]
* Return 2
*
* You have 2 children and 3 cookies. The greed factors of 2 children are 1, 2.
* You have 3 cookies and their sizes are big enough to gratify all of the children.
* You need to output 2.
*/

/**
* findContentChildren()
*
* Solution:
*
*
*
* Time: O(1)
* Space: O(1)
*
* @param {array} g factor of each child greed[i]
* @param {array} s of each cookie size[i]
* @return {number} returns the maximum of content children
*/

// function findContentChildren(g, s) {
//
// }
//
// export default findContentChildren;
