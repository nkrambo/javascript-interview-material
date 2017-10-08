
import { expect } from 'chai';
import appearsTwice from '../which_appears_twice';

describe('appearsTwice()', () => {
  test('should return the number which appears twice', () => {
    expect(appearsTwice([1, 2, 3, 4, 4, 5, 6, 7])).to.equal(4);
    expect(appearsTwice([1, 1])).to.equal(1);
    expect(appearsTwice([1, 2, 3, 3])).to.equal(3);
  });

  test('should throw a type error', () => {
    expect(() => { appearsTwice(null); }).to.throw(TypeError);
    expect(() => { appearsTwice(undefined); }).to.throw(TypeError);
    expect(() => { appearsTwice(5); }).to.throw(TypeError);
  });
});
