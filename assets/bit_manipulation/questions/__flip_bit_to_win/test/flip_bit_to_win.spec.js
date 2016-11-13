
import { expect } from 'chai';
import flipBitToWin from '../flip_bit_to_win';

describe('flipBitToWin()', () => {
  it('should return the longest sequence of 1 bits with a single bit flip', () => {
    expect(flipBitToWin(1775)).to.equal(8);
    expect(flipBitToWin(905)).to.equal(4);
  });
});
