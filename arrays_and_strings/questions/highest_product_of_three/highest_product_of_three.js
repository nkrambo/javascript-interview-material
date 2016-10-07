
/**
* Higest Product of Three
*
* Given an array of integers, positive and negative, find the highest product you can
* get from three of the integers. The input will always have at least three integers.
*
*/

/**
* highestProductOf3()
*
* Solution:
*
* Type: Greedy
*
* The brute force approach would iterate through array and multiply each integer by each
* other integer, and then multiply that product by each other other integer.
* This would probably involve nesting 3 loops. But that would be an O(n^3) runtime! Horrible!
*
* Because any integer in the array could possibly make up the hightest of 3, we must touch
* every element at some point, so we know that the best we could probably do it O(n).
*
* Sorting the array would allow us to grab the hightest 3 elements easily, but this is still
* O(n log n), we can do better.
*
* We can probably acheive a O(n) runtime using a greedy approach. So we would keep track of the
* highest product of 3 'so far', as we walk the array.
*
* We have a new highestProductOfThree if the current number times two other numbers gives a product
* that's higher than our current highestProductOfThree.
*
* Before we think about what we need to keep track of at each step, consider the following example.
*
* let arr = [1, 10, -5, 1, -100];
*
* We can take -100 * -5 * 10 to get 5000.
*
* This tells us, that we need to track the hightest product of 2, and the lowest
* product of 2 (could be a low negative number). If the current number times one
* of those is higher than the current highestProductOfThree, we have
* a new highestProductOfThree!
*
* How do we do this?
*
* We also keep track of the lowest number and highest number. If the current number
* times the current highest—or the current lowest, if current is negative—is greater
* than the current highestProductOf2, we have a new highestProductOf2.
* Same for lowestProductOf2.
*
* So at each iteration we're keeping track of and updating:
*
* - highestProductOfThree
* - highestProductOf2
* - highest
* - lowestProductOf2
* - lowest
*
* Time: O(n)
* Space: O(1)
* Where n is the length of the array.
*
* @param {array} arr array of integers of (n) length
* @return {number} returns the highest product of 3 combined integers within array.
*/

function highestProductOf3(arr) {
  if (arr.length < 3) throw new Error('Less than 3 items!');

  // We're going to start at the 3rd item (at index 2)
  // so pre-populate highests and lowests based on the first 2 items.
  // we could also start these as null and check below if they're set
  // but this is arguably cleaner
  let highest = Math.max(arr[0], arr[1]);
  let lowest  = Math.min(arr[0], arr[1]);

  let highestProductOf2 = arr[0] * arr[1];
  let lowestProductOf2  = arr[0] * arr[1];

  // except this one--we pre-populate it for the first /3/ items.
  // this means in our first pass it'll check against itself, which is fine.
  let highestProductOf3 = arr[0] * arr[1] * arr[2];

  // walk through items, starting at index 2
  for (let i = 2; i < arr.length; i += 1) {
    let current = arr[i];

    // do we have a new highest product of 3?
    // it's either the current highest,
    // or the current times the highest product of two
    // or the current times the lowest product of two
    highestProductOf3 = Math.max(
      highestProductOf3,
      current * highestProductOf2,
      current * lowestProductOf2
    );

    // do we have a new highest product of two?
    highestProductOf2 = Math.max(
      highestProductOf2,
      current * highest,
      current * lowest
    );

    // do we have a new lowest product of two?
    lowestProductOf2 = Math.min(
      lowestProductOf2,
      current * highest,
      current * lowest
    );

    // do we have a new highest?
    highest = Math.max(highest, current);

    // do we have a new lowest?
    lowest = Math.min(lowest, current);
  }

  return highestProductOf3;
}

export default highestProductOf3;
