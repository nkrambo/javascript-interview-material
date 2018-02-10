
import letterCombinations from '../letter_combinations_phone_number';

describe('letterCombinations()', () => {
  test('should return all the letter combinations that a digit could represent on a phone', () => {
    expect(letterCombinations('23')).toEqual(['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']);
  });
});
