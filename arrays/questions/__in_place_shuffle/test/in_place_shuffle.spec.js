
import { expect } from 'chai';
import inPlaceShuffle from '../in_place_shuffle';

describe('inPlaceShuffle()', () => {
  it('should do an in-place uniform shuffle', () => {
    expect(inPlaceShuffle([])).to.deep.equal();
  });

  it('should throw a type error', () => {
    expect(function(){ inPlaceShuffle(null); }).to.throw (TypeError);
    expect(function(){ inPlaceShuffle(undefined); }).to.throw (TypeError);
    expect(function(){ inPlaceShuffle(5); }).to.throw (TypeError);
  });
});
