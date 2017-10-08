
import binarySearch from '../binary_search';

describe('binarySearch()', () => {
  test('should return the correct index of searched integer if found', () => {
    const test = [1, 2, 3, 4, 5];
    expect(binarySearch(test, 4)).toBeTruthy();
    expect(binarySearch(test, 1)).toBeTruthy();
  });

  test('should return -1 if the value is not present', () => {
    const test = [1, 2, 3, 4, 5];
    expect(binarySearch(test, 6)).toBeFalsy();
  });
});
