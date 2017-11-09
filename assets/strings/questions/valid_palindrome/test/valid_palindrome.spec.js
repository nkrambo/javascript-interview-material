
import isPalindrome from '../valid_palindrome';

describe('isPalindrome()', () => {
  test('should return true if a string is a palindrome', () => {
    expect(isPalindrome('a')).toBeTruthy();
    expect(isPalindrome('aa')).toBeTruthy();
    expect(isPalindrome('dad')).toBeTruthy();
    expect(isPalindrome('racecar')).toBeTruthy();
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBeTruthy();
  });

  test('should return false if a string is NOT a palindrome', () => {
    expect(isPalindrome('ab')).toBeFalsy();
    expect(isPalindrome('abcd')).toBeFalsy();
    expect(isPalindrome('race a car')).toBeFalsy();
  });
});
