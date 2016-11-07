
import { expect } from 'chai';
import powerOfFour from '../power_of_four';

describe('powerOfFour()', () => {
  it('should return true if num is a power of four', () => {
    expect(powerOfFour(16)).to.be.true;
    expect(powerOfFour(1024)).to.be.true;
  });

  it('should return false if num is not a power of four', () => {
    expect(powerOfFour(5)).to.be.false;
    expect(powerOfFour(8)).to.be.false;
    expect(powerOfFour(0)).to.be.false;
    expect(powerOfFour(-1)).to.be.false;
  });
});
