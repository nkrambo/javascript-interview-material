
import { expect } from 'chai';
import { maxWiggle, maxWiggleGreedy } from '../wiggle_sequence';

describe('maxWiggle()', () => {
  it('should return the maximum wiggle sequence', () => {
    expect(maxWiggle([1, 7, 4, 9, 2, 5])).to.equal(6);
    expect(maxWiggle([1, 17, 5, 10, 13, 15, 10, 5, 16, 8])).to.equal(7);
    expect(maxWiggle([1, 2, 3, 4, 5, 6, 7, 8, 9])).to.equal(2);
    expect(maxWiggle([1, 1, 1])).to.equal(1);
    expect(maxWiggle([1, 2, 1])).to.equal(3);
    expect(maxWiggle([100])).to.equal(1);
  });

  it('should throw a type error', () => {
    expect(function(){ maxWiggle (null); }).to.throw (TypeError);
    expect(function(){ maxWiggle (undefined); }).to.throw (TypeError);
    expect(function(){ maxWiggle (5); }).to.throw (TypeError);
  });
});

describe('maxWiggleGreedy()', () => {
  it('should return the maximum wiggle sequence', () => {
    expect(maxWiggleGreedy([1, 7, 4, 9, 2, 5])).to.equal(6);
    expect(maxWiggleGreedy([1, 17, 5, 10, 13, 15, 10, 5, 16, 8])).to.equal(7);
    expect(maxWiggleGreedy([1, 2, 3, 4, 5, 6, 7, 8, 9])).to.equal(2);
    expect(maxWiggleGreedy([1, 1, 1])).to.equal(1);
    expect(maxWiggleGreedy([1, 2, 1])).to.equal(3);
    expect(maxWiggleGreedy([100])).to.equal(1);
  });

  it('should throw a type error', () => {
    expect(function(){ maxWiggleGreedy (null); }).to.throw (TypeError);
    expect(function(){ maxWiggleGreedy (undefined); }).to.throw (TypeError);
    expect(function(){ maxWiggleGreedy (5); }).to.throw (TypeError);
  });
});
