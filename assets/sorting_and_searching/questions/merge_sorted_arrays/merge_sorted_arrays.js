
/**
* Merge Sorted Arrays
*
* In order to win the prize for most cookies sold, my friend Alice and I are going
* to merge our Girl Scout Cookies orders and enter as one unit.
*
* Each order is represented by an 'order id' (an integer).
*
* We have our lists of orders sorted numerically already, in arrays. Write a function
* to merge our arrays of orders into one sorted array.
*
* For example:
*
* const myArray = [3, 4, 6, 10, 11, 15];
* const alicesArray = [1, 5, 8, 12, 14, 19];
*
* console.log(mergeSorted(myArray, alicesArray));
* logs [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]
*/

/**
* Merge Sorted
*
* Solution:
*
* We could simply concatenate (join together) the two arrays into one, then sort
* the result:
*
* Firstly, using the built-in sorting(), takes O(n log n). Any manual sorting will
* also take O(n log n). We can do better than this.
*
* Secondly, the arrays are already sorted, we can take advantage of this.
*
* Since our arrays are sorted, we know they each have their smallest item in the
* 0th index. So the smallest item overall is in the 0th index of one of our input arrays!
* Whichever is smallest between the two.
*
* Consider a small example:
*
* [3, 4, 6, 7]  // a
* [x, 5, 8, 9]  // b
* [1, x, x, x]  // merged
*
* To start with, we take the smallest element from a[0] and b[0] and place it in
* our merged array as the first element. In this case, we took b[0].
*
* We need to either mark the merged in element or remove it. We then repeat this
* process, picking the smallest of the 'leftmost' elements in our 2 arrays. So,
* next we would compare (3, 5), merge 3 and compare (4, 5), merge 4, and so on.
*
* Here are some edge cases:
*
* 1. One or both of our input arrays is 0 elements or 1 element
* 2. One of our input arrays is longer than the other.
* 3. One of our arrays runs out of elements before we're done merging.
*
* Actually, 3 will always happen. In the process of merging our arrays, we'll
* certainly exhaust one before we exhaust the other. We need to handle this.
*
* If both arrays are empty, we're fine. But, at some point, aIndex and bIndex will
* be undefined. JavaScript gives false for any comparison with undefined, which
* in our case is fine. Nonetheless, it's still messy and we should code accordingly.
*
* First, we allocate our merged array, getting its size by adding the size of a and b.
*
* We keep track of a current index in a, a current index in b, and a current index
* in merged. So at each step, there's a 'current item' in a and in b. The smaller
* of those is the next one we add to the merged!
*
* But careful: we also need to account for the case where we exhaust one of our
* arrays and there are still elements in the other. To handle this, we say that
* the current item in a is the next item to add to merged only if a is not exhausted AND, either:
*
* 1. b is exhausted, or
* 2. the current item in a is less than the current item in b
*
* The if statement is carefully constructed to avoid indexing into an empty array,
* because JavaScript would give us 'undefined' and we don't want to compare
* undefined with an integer. We take advantage of JavaScript's lazy evaluation and
* check first if the arrays are exhausted.
*
* Time: O(n)
* Space: O(n)
* Where n is the number of items in the merged array.
*
* The added space comes from allocating the mergedArray. There's no way to do this
* 'in-place' because neither of our input arrays are necessarily big enough to
* hold the merged array.
*
* But if our inputs were linked lists, we could avoid allocating a new structure
* and do the merge by simply adjusting the next pointers in the list nodes!
*
* @param {array} a sorted array
* @param {array} b sorted array
* @return {array} Returns a sorted array of merge a, b
*/

function mergeSorted(a, b) {
  // set up result and index's
  const merged = [];
  let aIndex = 0;
  let bIndex = 0;
  let mergedIndex = 0;

  while (mergedIndex < (a.length + b.length)) {
    const aDone = aIndex >= a.length;
    const bDone = bIndex >= b.length;

    // case: next comes from array 'a', which must not be done, and EITHER:
    // 1) array 'b' IS done, or
    // 2) the current element in array 'a' is less than the current element in array 'b'
    if (!aDone && (bDone || (a[aIndex] < b[bIndex]))) {
      merged[mergedIndex] = a[aIndex];
      aIndex += 1;

    // case: next comes from array b
    } else {
      merged[mergedIndex] = b[bIndex];
      bIndex += 1;
    }

    mergedIndex += 1;
  }

  return merged;
}

export default mergeSorted;
