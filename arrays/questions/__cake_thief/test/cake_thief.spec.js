
import { expect } from 'chai';
import maxDuffelBagValue from '../cake_thief';

describe('maxDuffelBagValue()', () => {
  const cakeTypes = [
    {weight: 7, value: 160},
    {weight: 3, value: 90},
    {weight: 2, value: 15}
  ];

  it('should return the maximum value the bag capacity can hold', () => {
    expect(maxDuffelBagValue(cakeTypes, 20)).to.equal(555);
  });
});
