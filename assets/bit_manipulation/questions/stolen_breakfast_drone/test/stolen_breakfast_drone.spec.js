
import findUniqueDeliveryId from '../stolen_breakfast_drone';

describe('findUniqueDeliveryId()', () => {
  test('should return the unique id', () => {
    const ids = [1, 2, 3, 4, 5, 6, 1, 2, 3, 5, 6];
    expect(findUniqueDeliveryId(ids)).toBe(4);
  });
});
