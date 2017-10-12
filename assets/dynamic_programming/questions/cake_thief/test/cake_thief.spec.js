
import maxDuffelBagValue from '../cake_thief';

describe('maxDuffelBagValue()', () => {
  test('should return the maximum value the bag capacity can hold', () => {
    const cakesOne = [
      { weight: 7, value: 160 },
      { weight: 3, value: 90 },
      { weight: 2, value: 15 },
    ];
    const cakesTwo = [
      { weight: 3, value: 90 },
      { weight: 2, value: 15 },
    ];

    expect(maxDuffelBagValue(cakesOne, 20)).toBe(555);
    expect(maxDuffelBagValue(cakesTwo, 6)).toBe(180);
  });
});
