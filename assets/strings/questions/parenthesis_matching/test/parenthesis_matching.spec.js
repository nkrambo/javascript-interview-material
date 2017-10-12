
import { expect } from 'chai';
import parenthesisMatching from '../parenthesis_matching';

describe('parenthesisMatching()', () => {
  test(
    'should return the index of the closing parenthesis for character at pos.',
    () => {
      expect(parenthesisMatching('Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.', 10)).toBe(79);
      expect(parenthesisMatching('(Sometimes)', 0)).toBe(10);
      expect(parenthesisMatching('()', 0)).toBe(1);
      expect(parenthesisMatching('test ((this) please)', 6)).toBe(11);
    }
  );

  test('should throw an error if pos does not match parenthesis index.', () => {
    expect(() => { parenthesisMatching('(sentence)', 5); }).toThrow(Error);
  });

  test('should throw an error if there is no closing parenthesis.', () => {
    expect(() => { parenthesisMatching('(this will throw error', 0); }).toThrow(Error);
  });
});
