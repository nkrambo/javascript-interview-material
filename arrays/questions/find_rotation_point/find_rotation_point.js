
/**
* Find Rotation Point
*
* Types: Binary Search
*
* I opened up a dictionary to a page in the middle and started flipping through,
* looking for words I didn't know. I put each word I didn't know at increasing
* indices in a huge array I created in memory. When I reached the end of the
* dictionary, I started from the beginning and did the same thing until I reached
* the page I started at.
*
* Now I have an array of words that are mostly alphabetical, except they start
* somewhere in the middle of the alphabet, reach the end, and then start from the
* beginning of the alphabet. In other words, this is an alphabetically ordered
* array that has been 'rotated'.
*
* For example:
*
* const words = ['ptolemaic',
*                'retrograde',
*                'supplant',
*                'undulate',
*                'xenoepist',
*                'asymptote', // <-- rotates here!
*                'babka',
*                'banoffee',
*                'engender',
*                'karpatka',
*                'othellolagkage'];
*
* Write a function for finding the index of the 'rotation point', which is where
* I started working from the beginning of the dictionary. This array is huge
* (there are lots of words I don't know) so we want to be efficient here.
*/

/**
* findRotationPoint()
*
* Solution:
*
* The set is mostly ordered. We can exploit that fact and write an adapted version
* of binary search for this.
*
* In each iteration of our binary search, we need to know if the rotation point
* is to our left or to our right.
*
* Here's an example array:
*
* words = [ 'k','v','a','b','c','d','e','g','i' ]
*                            ^
*
* If our 'current guess' is the middle item, which is 'c' in this case, notice that
* every item to the right of our rotation point is always alphabetically before
* the first item in the array.
*
* So the rotation point is to our left if the current item is less than the first item.
* Else it's to our right.
*
* We keep track of the lower and upper bounds on the rotation point, calling them
* 'floor' and 'ceiling' (initially we called them 'floor' and 'ceiling',
* but because we didn't imply the type in the name we got confused and created bugs).
* When floor and ceiling are directly next to each other, we know the
* floor is the last item we added before starting from the beginning of the dictionary,
* and the ceiling is the first item we added after.
*
* Time: O(log n)
* Space: O(1)
*
* We're assuming that our word lengths are bound by some constant — if they were
* bounded by a non-constant l, each of our string comparisons would cost O(l),
* for a total of O(l * log n) runtime.
*
* @param {array} words array of words
* @return {number} returns index of the rotation point, -1 if there's no rotation
*/

function findRotationPoint(words) {
  const first = words[0];
  let floor = 0;
  let ceiling = words.length - 1;

  while (floor < ceiling) {
    // guess a point halfway between floor and ceiling
    let guess = Math.floor(floor + ((ceiling - floor) / 2));

    // if guess comes after first word
    if (words[guess] > first) {
      // go right
      floor = guess;
    } else {
      // go left
      ceiling = guess;
    }

    // if floor and ceiling have converged
    if (floor + 1 === ceiling) {
      // between floor and ceiling is where we flipped to the beginning
      // so ceiling is alphabetically first
      break;
    }
  }

  return ceiling;
}

export default findRotationPoint;
