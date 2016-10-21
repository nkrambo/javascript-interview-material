
import { expect } from 'chai';
import findRotationPoint from '../find_rotation_point';

describe('findRotationPoint()', () => {
  const words = ['ptolemaic',
                'retrograde',
                'supplant',
                'undulate',
                'xenoepist',
                'asymptote', // <-- rotates here!
                'babka',
                'banoffee',
                'engender',
                'karpatka',
                'othellolagkage'];

  it('should return the index of the rotation point', () => {
    expect(findRotationPoint(words)).to.equal(5);
  });
});
