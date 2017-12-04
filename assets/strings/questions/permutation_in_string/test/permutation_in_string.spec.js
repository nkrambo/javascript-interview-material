
// import { checkInclusion, checkInclusionWindow } from '../permutation_in_string';
import { checkInclusion } from '../permutation_in_string';

describe('checkInclusion()', () => {
  test('should true if the s2 contains a permutation of s1', () => {
    expect(checkInclusion('ab', 'eidbaooo')).toBeTruthy();
    expect(checkInclusion('a', 'abc')).toBeTruthy();
    expect(checkInclusion('cats', 'jhgdtascjjs')).toBeTruthy();
  });

  test('should false if the s2 does NOT contain a permutation of s1', () => {
    expect(checkInclusion('ab', 'eidboaoo')).toBeFalsy();
    expect(checkInclusion('hello', 'ooolleoooleh')).toBeFalsy();
    expect(checkInclusion('a', 'zxc')).toBeFalsy();
  });
});

// describe('checkInclusionWindow()', () => {
//   test('should true if the s2 contains a permutation of s1', () => {
//     expect(checkInclusionWindow('ab', 'eidbaooo')).toBeTruthy();
//     expect(checkInclusionWindow('a', 'abc')).toBeTruthy();
//     expect(checkInclusionWindow('cats', 'jhgdtascjjs')).toBeTruthy();
//   });
//
//   test('should false if the s2 does NOT contain a permutation of s1', () => {
//     expect(checkInclusionWindow('ab', 'eidboaoo')).toBeFalsy();
//     expect(checkInclusionWindow('hello', 'ooolleoooleh')).toBeFalsy();
//     expect(checkInclusionWindow('a', 'zxc')).toBeFalsy();
//   });
// });
