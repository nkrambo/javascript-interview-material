
/**
* Sorted Search, No Size
*
* You are given an array-like data structure 'Listy' which lacks a size method.
* It does, however, have an elementAt(i) method that returns the element at index i
* in O(1) time. If i is beyond the bounds of the data structure, it returns -1.
* (For this reason, the data structure only supports positive integers).
*
* Given a 'Listy' which contains sorted, positive integers, find the index at which
* an element x occurs. If x occurs multiple times, you may return any index.
*
* Solution:
*
* The list is sorted, so our first thought here should be binary search. The problem
* is that binary search requires us knowing the length of the list, so that we can
* compare it to the mid point. We don't have that here.
*
* We can compute the length though!
*
* We know that elementAt(i) will return -1 when i is too large. We can therefore
* just try larger and larger values until we exceed the size of the list.
*
* If we just went through the list lineraly (1, 2, 3, 4... and so on), we'd end up
* with a linear runtime. We want something faster than this, as we could just check
* each value at every index in the same rumtime.
*
* It's better to back off exponentially. Try 1, then 2, 4, 8, 16, and so on. This
* ensures that, if the list has length n, we'll find the length in, at most,
* O(log n) time.
*
* Once we find the length, we just perform a (mostly) normal binary search. I say
* 'mostly' because we need to make one small tweak. If the mid point is -1, we need
* to treat this as a 'too big' value and search left.
*
* There's one more little tweak. Recall that the way we figure out the length is
* by calling elementAt() and comparing it to -1. If, in the process, the element
* is bigger than the value x (the one we're searching for), we'll jump over to the
* binary search part early.
*
* Time: O(1)
* Space: O(1)
*/

function indexAtListy(x) {

}

export default indexAtListy;
