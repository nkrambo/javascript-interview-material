
/**
* Temperature Tracker
*
* You decide to test if your oddly-mathematical heating company is fulfilling its
* All-Time Max, Min, Mean and Mode Temperature Guarantee™.
*
* Write a class TempTracker with these methods:
*
* 1. insert() — records a new temperature
* 2. getMax() — returns the highest temp we've seen so far
* 3. getMin() — returns the lowest temp we've seen so far
* 4. getMean() — returns the mean of all temps we've seen so far
* 5. getMode() — returns a mode of all temps we've seen so far
*
* Optimize for space and time. Favor speeding up the getter functions (getMax(),
* getMin(), getMean(), and getMode()) over speeding up the insert() function.
*
* Temperatures will all be inserted as integers. We'll record our temperatures
* in Fahrenheit, so we can assume they'll all be in the range 0..110.
*
* If there is more than one mode, return any of the modes.
*
* Solution:
* Our first thought might be to throw our temperatures into an array or linked
* list as they come in. With this method, getting the maxTemp and minTemp would
* take O(n) time. It would also cost us O(n) space. But we can do better.
*
* What if we kept track of the maxTemp and minTemp as each new number was inserted?
*
* This wins us O(1) time for getMax() and getMin(), while keeping O(1) time for
* insert() and removing the need to store all the values.
*
* Can we do something similar for getMean()?
*
* Unlike with minTemp and maxTemp, the new temp and the previous mean won't give
* us enough information to calculate the new mean. What other information will
* we need to track?
*
* To calculate the mean of a list of values, we need to know:
*
* 1. The sum of all the values
* 2. The total number of values
*
* So we can augment our class to keep track of the totalNumbers and totalSum.
* Then we can compute the mean as values are inserted. Same with the mean.
*
* To sumarise. We maintain the maxTemp, minTemp, mean, and mode as temperatures
* are inserted, so that each getter function simply returns an instance variable.
*
* To maintain the mean at each insert, we track the totalNumbers and the totalSum
* of numbers inserted so far.
*
* To maintain the mode at each insert, we track the total occurrences of each number,
* as well as the maxOccurrences we've seen so far.
*
* We don't really need the getter functions since they all return attributes.
* We could directly access the attributes! We'll leave the getter functions in
* our solution because the question specifically asked for them.
*
* This question deals a lot with just-in-time vs ahead-of-time. Or lazy vs eager.
*
* Our first thought for this question might have been to use a just-in-time approach:
* have our insert() function simply put the temperature in a list, and then have
* our getters compute e.g. the mode just-in-time, at the moment the getter is called.
*
* Instead, we used an ahead-of-time approach: have our insert function compute
* and store our mean, mode, max, and min ahead of time (that is, before they're asked for).
* So our getter just returns the pre-computed value in O(1) time.
*/

class TempTracker {
  constructor() {
    // min and max
    this.minTemp = null;
    this.maxTemp = null;

    // mean
    this.totalCount = 0;
    this.tempSum = 0;
    this.mean = null;

    // mode
    this.occurences = [];
    for (let i = 0; i <= 110; i += 1) {
      this.occurences[i] = 0;
    }
    this.maxOccurences = 0;
    this.mode = null;
  }

  insert(temp) {
    // range check
    if (temp < 0 || temp > 110) {
      throw new RangeError('TempTracker.insert(temp): temp is outside range (0 - 110)');
    }

    // min and max
    if (this.minTemp === null || temp < this.minTemp) {
      this.minTemp = temp;
    }

    if (this.maxTemp === null || temp > this.maxTemp) {
      this.maxTemp = temp;
    }

    // mean
    this.totalCount += 1;
    this.tempSum += temp;
    this.mean = this.tempSum / this.totalCount;

    // mode
    this.occurences[temp] += 1;
    if (this.occurences[temp] > this.maxOccurences) {
      this.mode = temp;
      this.maxOccurences = this.occurences[temp];
    }
  }

  getMax() {
    return this.maxTemp;
  }

  getMin() {
    return this.minTemp;
  }

  getMean() {
    return Math.round(this.mean);
  }

  getMode() {
    return this.mode;
  }
}

export default TempTracker;
