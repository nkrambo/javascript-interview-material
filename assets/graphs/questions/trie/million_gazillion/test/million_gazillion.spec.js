
import MillionGazillion from '../million_gazillion';

describe('MillionGazillion', () => {
  const dict = new MillionGazillion();
  dict.checkOrAdd('test');

  test('should add in new word', () => {
    expect(Object.prototype.hasOwnProperty.call(dict.root, 't')).toBeTruthy();
  });

  test('should return false if a word exists', () => {
    expect(dict.checkOrAdd('test')).toBeFalsy();
  });
});
