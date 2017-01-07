
import { expect } from 'chai';
import tripleStep from '../triple_step';

describe('tripleStep()', () => {
  it('should count the number of ways a child can run up the stairs with 1, 2 or 3 steps at a time', () => {
    expect(tripleStep(0)).to.equal(0);
    expect(tripleStep(1)).to.equal(1);
    expect(tripleStep(2)).to.equal(2);
    expect(tripleStep(3)).to.equal(4);
    expect(tripleStep(4)).to.equal(7);
    expect(tripleStep(5)).to.equal(13);
  });
});
