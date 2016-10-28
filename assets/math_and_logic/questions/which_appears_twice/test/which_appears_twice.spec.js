
import { expect } from 'chai';
import appearsTwice from '../which_appears_twice';

describe('appearsTwice()', () => {
  it('should return the number which appears twice', () => {
    expect(appearsTwice([1, 2, 3, 4, 4, 5, 6, 7])).to.equal(4);
    expect(appearsTwice([1, 1])).to.equal(1);
    expect(appearsTwice([1, 2, 3, 3])).to.equal(3);
  });

  it('should throw a type error', () => {
    expect(function(){ appearsTwice(null); }).to.throw (TypeError);
    expect(function(){ appearsTwice(undefined); }).to.throw (TypeError);
    expect(function(){ appearsTwice(5); }).to.throw (TypeError);
  });
});
