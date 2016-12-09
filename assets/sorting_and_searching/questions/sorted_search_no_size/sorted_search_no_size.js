
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
* class Listy {
*   constructor() {
*     this.items = [];
*   }
*
*   elementAt(index) {
*     return this.items[index] ? this.items[index] : -1;
*   }
* }
*/

/**
* indexAtListy()
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
* Time: O(log n)
* Space: O(1)
*
* It turns out that not knowing the length didn't impact the runtime of our search
* algorithm. We find the length in O(log n) time then complete the search in O(lon n)
* time as well.
*
* @param {object} listy list
* @param {object} target the element to search for
*/

function indexAtListy(listy, target) {

  // calculate our list length
  let length = 1;
  while (listy.elementAt(length) !== -1 && listy.elementAt(length) < target) {
    length *= 2;
  }

  // we create index 'range' around possible positions of our target
  let left = 0;
  let right = length;

  // while there are unchecked positions in our 'range', keep checking midpoint
  while (left <= right) {

    // calculate midpoint, favour left if we need to
    const mid = Math.floor((left + right) / 2);

    // we found our target
    if (listy.items[mid] === target) return mid;

    // target is to the left, move right side of 'range' inward
    if (listy.items[mid] > target || listy.items[mid] === -1) {
      right = mid - 1;

    // target is to the right, move left side of 'range' inward
    } else {
      left = mid + 1;
    }
  }

  // fell through, target doesn't exist
  return -1;
}

export default indexAtListy;
