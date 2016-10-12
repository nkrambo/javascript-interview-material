
import { expect } from 'chai';
import robHomes from '../house_robber';

describe('robHomes()', () => {
  it('should return the maximum amount of cash', () => {
    expect(robHomes([10, 1200, 15, 20, 1000])).to.equal(2200);
  });

  it('should throw a type error', () => {
    expect(function(){ robHomes (null); }).to.throw (TypeError);
    expect(function(){ robHomes (undefined); }).to.throw (TypeError);
    expect(function(){ robHomes (5); }).to.throw (TypeError);
  });
});
