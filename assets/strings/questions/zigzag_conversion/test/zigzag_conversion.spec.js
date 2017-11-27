
import convert from '../zigzag_conversion';

describe('convert()', () => {
  test('should return a zigzagged string', () => {
    /*
    *   P   A   H   N
    *   A P L S I I G
    *   Y   I   R
    */
    expect(convert('PAYPALISHIRING', 3)).toEqual('PAHNAPLSIIGYIR');

    /*
    *   P       I       N
    *   A    L  S    I  G
    *   Y  A    H  R
    *   P       I
    */
    expect(convert('PAYPALISHIRING', 4)).toEqual('PINALSIGYAHRPI');
  });
});
