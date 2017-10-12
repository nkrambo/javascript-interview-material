
// import { rotateArrayBrute, rotateArrayExtra, rotateArrayCyclic, rotateArrayReverse } from '../rotate_array';

describe.skip('rotateArrayBrute()', () => {
  it('should rotate an array to the right by k steps', () => {
    const test = [1, 2, 3, 4, 5, 6, 7];
    rotateArrayBrute(test, 3);
    expect(test).toEqual([5, 6, 7, 1, 2, 3, 4]);
  });
});

describe.skip('rotateArrayExtra()', () => {
  it('should rotate an array to the right by k steps', () => {
    const test = [1, 2, 3, 4, 5, 6, 7];
    rotateArrayExtra(test, 3);
    expect(test).toEqual([5, 6, 7, 1, 2, 3, 4]);
  });
});

describe.skip('rotateArrayCyclic()', () => {
  it('should rotate an array to the right by k steps', () => {
    const test = [1, 2, 3, 4, 5, 6, 7];
    rotateArrayCyclic(test, 3);
    expect(test).toEqual([5, 6, 7, 1, 2, 3, 4]);
  });
});

describe.skip('rotateArrayReverse()', () => {
  it('should rotate an array to the right by k steps', () => {
    const test = [1, 2, 3, 4, 5, 6, 7];
    rotateArrayReverse(test, 3);
    expect(test).toEqual([5, 6, 7, 1, 2, 3, 4]);
  });
});
