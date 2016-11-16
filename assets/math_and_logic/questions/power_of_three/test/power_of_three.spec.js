
import { expect } from 'chai';
import powerOfThree from '../power_of_three';

describe('powerOfThree()', () => {
  it('should return true if n is a power of three', () => {
    expect(powerOfThree(9)).to.be.true;
    expect(powerOfThree(27)).to.be.true;
    expect(powerOfThree(81)).to.be.true;
    expect(powerOfThree(6561)).to.be.true;
  });

  it('should return false if n is not a power of three', () => {
    expect(powerOfThree(5)).to.be.false;
    expect(powerOfThree(-1)).to.be.false;
    expect(powerOfThree(22883)).to.be.false;
  });
});
