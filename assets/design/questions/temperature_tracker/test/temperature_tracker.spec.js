
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

  test('should return the min temperature', () => {
    expect(thermo.getMin()).to.equal(10);
  });

  test('should return the max temperature', () => {
    expect(thermo.getMax()).to.equal(80);
  });

  test('should return the mean temperature', () => {
    expect(thermo.getMean()).to.equal(41);
  });

  test('should return the mode temperature', () => {
    expect(thermo.getMode()).to.equal(60);
  });

  test('should throw a range error', () => {
    expect(() => { thermo.insert(115); }).to.throw(RangeError);
    expect(() => { thermo.insert(-10); }).to.throw(RangeError);
  });
});
