
import highestProduct from '../highest_product_of_three';

describe('highestProduct()', () => {
  test('should return the highest product of 3', () => {
    const arr = [3, 2, 7, 0, 0, 1, 23, 2];
    expect(highestProduct(arr)).toBe(483);
  });
});
