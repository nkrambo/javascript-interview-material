
/**
* Cake Theif
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
* Time: O(1)
* Space: O(1)
*
* @param {array} cakeTypes array of cake type objects
* @param {number} capacity weight capacity
* @return {number} returns the maximum monetary value the duffel bag can hold
*/

function maxDuffelBagValue(cakeTypes, capacity) {

}

export default maxDuffelBagValue;
