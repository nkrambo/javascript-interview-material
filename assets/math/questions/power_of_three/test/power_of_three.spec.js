
import { expect } from 'chai';
import isPowerOfThree from '../power_of_three';

describe('isPowerOfThree()', () => {
  test('should return true if n is a power of three', () => {
    expect(isPowerOfThree(9)).to.be.true;
    expect(isPowerOfThree(27)).to.be.true;
    expect(isPowerOfThree(81)).to.be.true;
    expect(isPowerOfThree(6561)).to.be.true;
  });

  test('should return false if n is not a power of three', () => {
    expect(isPowerOfThree(5)).to.be.false;
    expect(isPowerOfThree(-1)).to.be.false;
    expect(isPowerOfThree(22883)).to.be.false;
  });
});
