
/**
* Sorted Merge
*
* You are given two sorted arrays, A and B, where A has a large enough buffer at the end to hold B.
* Write a method to merge B into A in sorted order.
*
* Solution: The clue in this question is that A has enough buffer at the end, which means that we
* should supply an answer with additional space. Although this doesn't really apply to JS, because we
* have dynamic arrays, we should stick to the desired result too.
*
* We should simply just compare elements of A and B and insert them in order. We should push onto
* the back of the array so we don't have to shift the array, which is expensive.
*
* We therefore, start from the back of A and B and move the largest elements to the back of A.
*/

/**
* Sorted merge
*
* @param {array} a sorted array
* @param {array} b sorted array
* @return {array} Returns a sorted array of merge a, b
*/

function sortedMerge(a, b) {
  let indexA = a.length - 1;
  let indexB = b.length - 1;
  let indexMerged = (a.length + b.length) - 1;

  // merge
  while (indexB >= 0) {
    // if end of a is bigger than b
    if (indexA >= 0 && a[indexA] > b[indexB]) {
      // copy element
      a[indexMerged] = a[indexA];
      indexA--;

    } else {
      // copy element
      a[indexMerged] = b[indexB];
      indexB--;
    }

    // move indices
    indexMerged--;
  }
}

export default sortedMerge;
