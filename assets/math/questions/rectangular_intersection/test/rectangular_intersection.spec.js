
import { expect } from 'chai';
import rectangleIntersection from '../rectangular_intersection';

describe('rectangleIntersection()', () => {
  it('should return the intersection of 2 rectangles', () => {
    const rect1 = {
      // coordinates of bottom-left corner
      leftX: 1,
      bottomY: 1,

      // width and height
      width: 10,
      height: 5,
    };

    const rect2 = {
      // coordinates of bottom-left corner
      leftX: 3,
      bottomY: 3,

      // width and height
      width: 10,
      height: 5,
    };

    const intersection = {
      // coordinates of bottom-left corner
      leftX: 3,
      bottomY: 3,

      // width and height
      width: 8,
      height: 3,
    };

    expect(rectangleIntersection(rect1, rect2)).to.deep.equal(intersection);
  });

  it('should return an object with properties set to null if there\'s no intersection', () => {
    const rect1 = {
      // coordinates of bottom-left corner
      leftX: 1,
      bottomY: 1,

      // width and height
      width: 4,
      height: 2,
    };

    const rect2 = {
      // coordinates of bottom-left corner
      leftX: 5,
      bottomY: 5,

      // width and height
      width: 4,
      height: 2,
    };

    const nullRect = {
      leftX: null,
      bottomY: null,
      width: null,
      height: null,
    };

    expect(rectangleIntersection(rect1, rect2)).to.deep.equal(nullRect);
  });
});
