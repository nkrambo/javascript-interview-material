
/**
* Cake Thief
*
* Tags: Bottom Up, Unbounded Knapsack Problem, Classic Problems
*
* You are a renowned thief who has recently switched from stealing precious
* metals to stealing cakes because of the insane profit margins. You end up
* hitting the jackpot, breaking into the world's largest privately owned stock
* of cakes—the vault of the Queen of England.
*
* While Queen Elizabeth has a limited number of types of cake, she has an unlimited
* supply of each type.
*
* Each type of cake has a weight and a value, stored in an object with two properties:
*
* 1. weight: the weight of the cake in kilograms
* 2. value: the monetary value of the cake in British pounds
*
* For example:
*
* // weighs 7 kilograms and has a value of 160 pounds
* {weight: 7, value: 160}
*
* // weighs 3 kilograms and has a value of 90 pounds
* {weight: 3, value: 90}
*
* You brought a duffel bag that can hold limited weight, and you want to make off
* with the most valuable haul possible.
*
* Write a function maxDuffelBagValue() that takes an array of cake type objects
* and a weight capacity, and returns the maximum monetary value the duffel bag
* can hold.
*
* For example:
*
* const cakeTypes = [
*   {weight: 7, value: 160},
*   {weight: 3, value: 90},
*   {weight: 2, value: 15},
* ];
*
* const capacity = 20;
*
* maxDuffelBagValue(cakeTypes, capacity);
* // returns 555 (6 of the middle type of cake and 1 of the last type of cake)
*
* Weights and values may be any non-negative integer. Yes, it's weird to think
* about cakes that weigh nothing or duffel bags that can't hold anything. But we're
* not just super mastermind criminals — we're also meticulous about keeping our
* algorithms flexible and comprehensive.
*/

/**
* maxDuffelBagValue()
*
* Solution:
*
* This is a classic computer science puzzle called 'the unbounded knapsack problem'.
* There are variations of this problem that determine the approach we would take.
* We further define this problems as 'unbounded' as all the weights are non-negative
* integers.
*
* So how do we solve the 'unbounded knapsack', we use bottom-up dynamic programming.
* As ususal, we can start with an example and build a grid to help up solve the
* over-lapping sub-problems.
*
* Let's say we have the following inputs...
*
* cakeTypes = [{weight: 1, value: 1},
*              {weight: 3, value: 4},
*              {weight: 4, value: 5},
*              {weight: 5, value: 7}];
*
* capacity = 7
*
* To solve the max value at our duffel bag's capacity we need to solve the sub-problems
* of finding the max value at every capacity from 0 to capacity. So across the top
* of our grid we place the weights 0 - capacity (7).
*
* Down the side, well we want the cakes by weight and value. Then, we go through
* each cake, checking to see if we should take that cake.
*
* +-----+-----+-------------------------------------------------+
* |  $  | wgt |   0     1     2     3     4     5     6     7   |
* +-------------------------------------------------------------+
* |  1  |  1  |   0     1     2     3     4     5     6     7   |
* +-------------------------------------------------------------+
* |  4  |  3  |   0     1     2     4     5     6     8     9   |
* +-------------------------------------------------------------+
* |  5  |  4  |   0     1     2     4     5     6     8     9   |
* +-------------------------------------------------------------+
* |  7  |  5  |   0     1     2     4     5     7     8     9   |
* +-------------------------------------------------------------+
*
* At capacity 0, we can obviously not put any cakes into out bag. So we have $0.
*
* At capacity 1, we can see that our first cake row has a weight of 1 and a value
* also of 1. Therefore, we can take 1 cake for each capacity increase by 1, which
* also happens to be the same value. That is, with capacity 3, we take 3 ($1) cakes
* with a total value of $3 and so on... So the best we can do at full capacity is $7.
*
* Let's look at our next cake {weight: 3, value: 4}. You have a knapsack of capacity
* 1 kg. Will the cake fit in there? Nope, it's too heavy! So, $1 remains the max
* value for a 1kg capacity. Same thing for the next two cells. Tese knapsacks have
* a capacity of 2kg and 3kg. The old max value for both was $1.
*
* At capacity 3kg, the cake finally fits! The current max value above is $3, but
* if we take the current cake it's $4, so we'll take that instead.
*
* At 4kg, things get really interesting. This is an important part. The best value
* so far above is $4, if we take 1 of the current cakes, it's also $4 but now we
* have 1kg of free space in the duffle bag! If we take the best value of a 1kg bag
* that we calculated before ($1), we can see that $4 + $1 = $5, which is better
* than the current best. So we take 1 (3kg) cake and 1 (1kg) cake.
*
* You might have been wondering why you were calculating max values for smaller
* duffle bags. I hope now it makes sense! When you have space left over, you can
* use the answers to those subproblems to figure out what will fit in that space.
*
* So if we if we have a 2 dimensional grid, where (i) are rows and (j) are columns.
* Each cell's value gets calculated with the same formula. Here it is.
*
* cell[i][j] = maximum of:
*
* 1. the previous max (value at cell[i-1][j])
*                     vs
* 2. value of current item + value of the remaining space (cell[i-1][j-item's weight])
*
* After we calculate each cell using this formula, we end up with our final result
* in the last bottom right cell, this is not always the same spot in DP problems.
*
* So our maximum value of cakes is $9 for a 7kg duffle bag.
*
* Time: O(n * k)
* Space: O(k)
*
* Where n is the number of types of cakes and k is the duffel bag's capacity.
*
* We loop through each cake (n cakes) for every capacity (k capacities), so our
* runtime is O(n * k), and maintaining the array of k+1 capacities gives us the
* O(k) space.
*
* @param {array} cakeTypes array of cake type objects
* @param {number} capacity weight capacity
* @return {number} returns the maximum monetary value the duffel bag can hold
*/

function maxDuffelBagValue(cakeTypes, capacity) {
  // we make an array to hold the maximum possible value at every duffel bag weight
  // capacity from 0 to capacity starting each index with value 0
  const grid = [];
  for (let i = 0; i <= capacity; i += 1) {
    grid[i] = 0;
  }

  for (let currentCapacity = 0; currentCapacity <= capacity; currentCapacity += 1) {

    // set a variable to hold the max monetary value so far for currentCapacity
    let currentMaxValue = 0;

    // we use a for loop here instead of forEach because we return infinity
    // if we get a cakeType that weighs nothing and has a value. but forEach
    // loops always return undefined and you can't break out of them without
    // throwing an exception
    for (let j = 0; j < cakeTypes.length; j += 1) {
      const cakeType = cakeTypes[j];

      // if a cake weighs 0 and has a positive value the value of our duffel bag is infinite!
      if (cakeType.weight === 0 && cakeType.value !== 0) {
        return Infinity;
      }

      // if the current cake weighs as much or less than the current weight capacity
      // it's possible taking the cake would give get a better value
      if (cakeType.weight <= currentCapacity) {

        // so we check: should we use the cake or not?
        // if we use the cake, the most kilograms we can include in addition to the cake
        // we're adding is the current capacity minus the cake's weight. we find the max
        // value at that integer capacity in our array grid
        const maxValueUsingCake = cakeType.value + grid[currentCapacity - cakeType.weight];

        // now we see if it's worth taking the cake. how does the
        // value with the cake compare to the currentMaxValue?
        currentMaxValue = Math.max(maxValueUsingCake, currentMaxValue);
      }
    }

    // add each capacity's max value to our array so we can use them
    // when calculating all the remaining capacities
    grid[currentCapacity] = currentMaxValue;
  }

  return grid[capacity];
}

export default maxDuffelBagValue;
