
import { expect } from 'chai';
import maxDuffelBagValue from '../cake_thief';

describe('maxDuffelBagValue()', () => {
  it('should return the maximum value the bag capacity can hold', () => {
    const cakesOne = [
      { weight: 7, value: 160 },
      { weight: 3, value: 90 },
      { weight: 2, value: 15 },
    ];
    const cakesTwo = [
      { weight: 3, value: 90 },
      { weight: 2, value: 15 },
    ];

    expect(maxDuffelBagValue(cakesOne, 20)).to.equal(555);
    expect(maxDuffelBagValue(cakesTwo, 6)).to.equal(180);
  });
});
