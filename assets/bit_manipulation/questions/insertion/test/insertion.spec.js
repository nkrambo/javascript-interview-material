
import insertion from '../insertion';

describe('insertion()', () => {
  test('should insert m into n such that m starts at bit j and ends at bit i', () => {
    expect(insertion(2048, 19, 2, 6)).toBe(2124);
    expect(insertion(201, 19, 5, 9)).toBe(617);
  });
});
