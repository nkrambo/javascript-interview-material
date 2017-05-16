
/**
* Rectangular Intersection
*
* Types: Maths, Rectangle Intersection
*
*                                   h
*                                   +------------------+
*                                   |                  |
*                                   |                  |
*                                   |                  |
*                                   |                  |
*                                   |                  |
*                                   |                  |
*                                   |                  |
*          h                        |                  |
*          +--------------------------------------+    |
*          |                        |+ + + + + + +|    |
*          |                        |+ + + + + + +|    |
*          |                        |+ + + + + + +|    |
*          |                        |+ + + + + + +|    |
*          |                        +------------------+
*          |                      (x, y)          |    w
*          +--------------------------------------+
*       (x, y)                                    w
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
* Let's start with the first 2 cases.
*
* One of our ranges starts 'further to the right' than the other. We don't know
* ahead of time which one it is, but we can check the starting points of each range
* to see which one has the highestStartPoint. That highestStartPoint is always
* the left-hand side of the overlap, if there is one.
*
* Similarly, the right-hand side of our overlap is always the lowestEndPoint.
* That may or may not be the end point of the same input range that had the
* highestStartPoint — compare cases (1) and (2).
*
* This gives us our x overlap! So we can handle cases (1) and (2). How do we know
* when there is no overlap?
*
* If highestStartPoint > lowestEndPoint, the two rectangles do not overlap.
*
* But be careful — is it just greater than or is it greater than or equal to?
*
* It depends how we want to handle case (4) above.
*
* If we use greater than, we treat case (4) as an overlap. This means we could
* end up returning a rectangle with zero width. Let's say a rectangle with zero
* width (or zero height) isn't a rectangle at all, so we should treat that case
* as 'no intersection'.
*
* We write our rangeOverlap() helper function.
*
* We use this helper to calculate the overlap length of both the x and y axis',
* then build the rectangular overlap.
*
* Both problems are basically the same as finding the intersection of two 'ranges'
* on a 1 - dimensional number line.
*
* Time: O(1)
* Space: O(1)
*
* @param {object} rect1 rectangle
* @param {object} rect2 rectangle
* @return {object} returns a rectangle object, representing the intersection of x and y
*/

function rangeOverlap(point1, length1, point2, length2) {
  // find the highest start point and lowest end point.
  // the highest ("rightmost" or "upmost") start point is
  // the start point of the overlap.
  // the lowest end point is the end point of the overlap.
  const highestStartPoint = Math.max(point1, point2);
  const lowestEndPoint = Math.min(point1 + length1, point2 + length2);

  // return null overlap if there is no overlap
  if (highestStartPoint >= lowestEndPoint) {
    return { startPoint: null, overlapLength: null };
  }

  // compute the overlap length
  const overlapLength = lowestEndPoint - highestStartPoint;

  return { startPoint: highestStartPoint, overlapLength };
}

function rectangleIntersection(rect1, rect2) {
  // get the x and y overlap points and lengths
  const xOverlap = rangeOverlap(rect1.leftX, rect1.width, rect2.leftX, rect2.width);
  const yOverlap = rangeOverlap(rect1.bottomY, rect1.height, rect2.bottomY, rect2.height);

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
