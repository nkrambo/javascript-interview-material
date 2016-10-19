
import { expect } from 'chai';
import TempTracker from '../temperature_tracker';

describe('TempTracker', () => {
  const thermo = new TempTracker();

  thermo.insert(20);
  thermo.insert(30);
  thermo.insert(40);
  thermo.insert(80);
  thermo.insert(25);
  thermo.insert(10);
  thermo.insert(60);
  thermo.insert(60);

  it('should return the min temperature', () => {
    expect(thermo.getMin()).to.equal(10);
  });

  it('should return the max temperature', () => {
    expect(thermo.getMax()).to.equal(80);
  });

  it('should return the mean temperature', () => {
    expect(thermo.getMean()).to.equal(41);
  });

  it('should return the mode temperature', () => {
    expect(thermo.getMode()).to.equal(60);
  });

  it('should throw a range error', () => {
    expect(function(){ thermo.insert(115); }).to.throw (RangeError);
    expect(function(){ thermo.insert(-10); }).to.throw (RangeError);
  });
});
