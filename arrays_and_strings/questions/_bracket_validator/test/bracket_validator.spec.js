
import { expect } from 'chai';
import bracketValidator from '../bracket_validator';

describe('bracketValidator()', () => {
  it('should return true if all brackets are balanced', () => {
    expect(bracketValidator('{ [ ] ( ) }')).to.be.true;
  });

  it('should return false if brackets are unbalanced', () => {
    expect(bracketValidator('{ [ ( ] ) }')).to.be.false;
    expect(bracketValidator('{ [ }')).to.be.false;
  });

  it('should throw a type error', () => {
    expect(function(){ bracketValidator (null); }).to.throw (TypeError);
    expect(function(){ bracketValidator (undefined); }).to.throw (TypeError);
    expect(function(){ bracketValidator (5); }).to.throw (TypeError);
  });
});
