
import { rand5, rand7 } from '../five_sided_die';

describe('rand5()', () => {
  test('should be above 0', () => {
    expect(rand5()).toBeGreaterThan(0);
  });

  test('should be below 6', () => {
    expect(rand5()).toBeLessThan(6);
  });
});

describe('rand7()', () => {
  test('should be above 0', () => {
    expect(rand7()).toBeGreaterThan(0);
  });

  test('should be below 8', () => {
    expect(rand7()).toBeLessThan(8);
  });
});
