

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
    expect(thermo.getMin()).toBe(10);
  });

  test('should return the max temperature', () => {
    expect(thermo.getMax()).toBe(80);
  });

  test('should return the mean temperature', () => {
    expect(thermo.getMean()).toBe(41);
  });

  test('should return the mode temperature', () => {
    expect(thermo.getMode()).toBe(60);
  });

  test('should throw a range error', () => {
    expect(() => { thermo.insert(115); }).toThrow(RangeError);
    expect(() => { thermo.insert(-10); }).toThrow(RangeError);
  });
});
