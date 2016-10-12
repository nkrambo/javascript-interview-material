
import { expect } from 'chai';
import robHomes from '../house_robber';

describe('robHomes()', () => {
  it('should return the maximum amount of cash', () => {
    expect(robHomes([10, 1200, 15, 20, 1000])).to.equal(2200);
    expect(robHomes([10, 300, 10, 10, 10, 200])).to.equal(510);
    expect(robHomes([100, 200])).to.equal(200);
    expect(robHomes([0, 0, 0])).to.equal(0);
  });

  it('should throw a type error', () => {
    expect(function(){ robHomes (null); }).to.throw (TypeError);
    expect(function(){ robHomes (undefined); }).to.throw (TypeError);
    expect(function(){ robHomes (5); }).to.throw (TypeError);
  });
});
