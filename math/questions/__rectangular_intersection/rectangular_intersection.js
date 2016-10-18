
/**
* Rectangular Intersection
*
* Types: Maths, Rectangle Intersection
*
*                                   +------------------+
*                                   |                  |
*                                   |                  |
*                                   |                  |
*                                   |                  |
*                                   |                  |
*                                   |                  |
*                                   |                  |
*                                   |                  |
*          +--------------------------------------+    |
*          |                        |+ + + + + + +|    |
*          |                        |+ + + + + + +|    |
*          |                        |+ + + + + + +|    |
*          |                        |+ + + + + + +|    |
*          |                        +------------------+
*          |                                      |
*          +--------------------------------------+
*
*
* Write a function to find the rectangular intersection of two given rectangles.
*
* Rectangles are always 'straight' and never 'diagonal'. More rigorously: each side
* is parallel with either the x-axis or the y-axis.
*
* They are defined as objects like this:
*
* const myRectangle = {
*   // coordinates of bottom-left corner
*   leftX: 1,
*   bottomY: 5,
*
*   // width and height
*   width: 10,
*   height: 4,
* };
*
* Your output rectangle should use this format as well.
*/

/**
* rectangleIntersection()
*
* Solution:
*
* Let's break this problem into subproblems.
*
* We could look at the two rectangles' 'x overlap' and 'y overlap' separately.
*
* If we're only working with the one dimension at a time, we can treat the two
* rectangles' widths as ranges on a 1-dimensional number line, that's simpler.
*
* Let's consider the possible cases for how these ranges might overlap or not overlap.
*
* There are four relevant cases:
*
* 1. The ranges partially overlap:
*
*             -------------
*                    ---------------
*
* 2. One range is completely contained in the other:
*
*               ----------------------
*                      --------
*
* 3. The ranges don't overlap:
*
*           -------------
*                           -----------
*
* 4. The ranges 'touch' at a single point:
*
*           -------------
*                        ------------
*
* We can write a helper function to return this.
*
* Time: O(1)
* Space: O(1)
*
* @param {object} rect1 rectangle
* @param {object} rect2 rectangle
* @return {object} returns a rectangle object, representing the intersection of x and y
*/

function findRangeOverlap(point1, length1, point2, length2) {

  // find the highest start point and lowest end point.
  // the highest ("rightmost" or "upmost") start point is
  // the start point of the overlap.
  // the lowest end point is the end point of the overlap.
  const highestStartPoint = Math.max(point1, point2);
  const lowestEndPoint = Math.min(point1 + length1, point2 + length2);

  // return null overlap if there is no overlap
  if (highestStartPoint >= lowestEndPoint) {
    return {startPoint: null, overlapLength: null};
  }

  // compute the overlap length
  const overlapLength = lowestEndPoint - highestStartPoint;

  return {startPoint: highestStartPoint, overlapLength: overlapLength};
}

function rectangleIntersection(rect1, rect2) {
  // get the x and y overlap points and lengths
  const xOverlap = findRangeOverlap(rect1.leftX, rect1.width, rect2.leftX, rect2.width);
  const yOverlap = findRangeOverlap(rect1.bottomY, rect1.height, rect2.bottomY, rect2.height);

  // return null rectangle if there is no overlap
  if (!xOverlap.overlapLength || !yOverlap.overlapLength) {
    return {
      leftX: null,
      bottomY: null,
      width: null,
      height: null,
    };
  }

  return {
    leftX: xOverlap.startPoint,
    bottomY: yOverlap.startPoint,
    width: xOverlap.overlapLength,
    height: yOverlap.overlapLength,
  };
}

export default rectangleIntersection;
