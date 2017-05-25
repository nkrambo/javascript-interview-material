
/**
* Stolen Breakfast Drone
*
* Your company delivers breakfast via autonomous quadcopter drones. And something
* mysterious has happened.
*
* Each breakfast delivery is assigned a unique ID, a positive integer. When one
* of the company's 100 drones takes off with a delivery, the delivery's ID is added
* to an array, deliveryIdConfirmations. When the drone comes back and lands, the
* ID is again added to the same array.
*
* After breakfast this morning there were only 99 drones on the tarmac. One of
* the drones never made it back from a delivery. We suspect a secret agent from
* Amazon placed an order and stole one of our patented drones. To track them down,
* we need to find their delivery ID.
*
* Given the array of IDs, which contains many duplicate integers and one unique
* integer, find the unique integer.
*
* The IDs are not guaranteed to be sorted or sequential. Orders aren't always
* fulfilled in the order they were received, and some deliveries get cancelled
* before takeoff.
*/

/**
* findUniqueDeliveryId()
*
* Solution:
*
* A brute force approach would use two nested loops to go through every ID and
* check every other ID to see if there's a duplicate.
*
* This would take O(n^2) time and O(1) space. Pretty bad.
*
* The only data we have is integers.
*
* Our machine stores integers as binary numbers using bits. So maybe we can use
* a bitwise operator to help us solve this.
*
* We’re seeing every integer twice, except one. We need a bitwise operation that
* would let the second occurrence of an integer cancel out the first.
*
* If so, we could start with a variable uniqueDeliveryId set to 0 and run some
* bitwise operation with that variable and each number in our array. If duplicate
* integers cancel each other out, then we’d only be left with the unique integer
* at the end!
*
* We can XOR all the integers in the array. We start with a variable uniqueDeliveryId
* set to 0. Every time we XOR with a new ID, it will change the bits. When we XOR
* with the same ID again, it will cancel out the earlier change.
*
* In the end, we'll be left with the ID that appeared once!
*
* Time: O(n)
* Space: O(1)
*
* @param {array} deliveryIds array of ids
* @return {number} returns a unique id
*/

function findUniqueDeliveryId(deliveryIds) {
  let uniqueId = 0;

  deliveryIds.forEach((id) => {
    uniqueId ^= id;
  });

  return uniqueId;
}

export default findUniqueDeliveryId;
