
import { removeElement1, removeElement2 } from '../remove_element';

describe('removeElement1()', () => {
  test('should return the length of array with val removed', () => {
    expect(removeElement1([3, 2, 2, 3], 3)).toBe(2); // [2, 2]
    expect(removeElement1([1, 2, 3, 5, 4], 4)).toBe(4); // [1, 2, 3, 5]
    expect(removeElement1([1], 4)).toBe(1); // [1]
  });
});

describe('removeElement2()', () => {
  test('should return the length of array with val removed', () => {
    expect(removeElement2([3, 2, 2, 3], 3)).toBe(2); // [2, 2]
    expect(removeElement2([1, 2, 3, 5, 4], 4)).toBe(4); // [1, 2, 3, 5]
    expect(removeElement2([1], 4)).toBe(1); // [1]
  });
});
