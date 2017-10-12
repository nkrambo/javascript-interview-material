
// import alienOrder from '../alien_dictionary';

describe.skip('alienOrder()', () => {
  test('should return the correct order of letters given a dictionary of words', () => {
    const words = ['wrt', 'wrf', 'er', 'ett', 'rftt'];
    expect(alienOrder(words)).toBe('wertf');
  });
});
