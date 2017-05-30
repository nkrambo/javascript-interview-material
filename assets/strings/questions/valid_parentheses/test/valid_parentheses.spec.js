
import { expect } from 'chai';
import isValid from '../valid_parentheses';

describe('isValid()', () => {
  it('should return true if all brackets are balanced', () => {
    expect(isValid('{ [ ] ( ) }')).to.be.true;
  });

  it('should return false if brackets are unbalanced', () => {
    expect(isValid('{ [ ( ] ) }')).to.be.false;
    expect(isValid('{ [ }')).to.be.false;
  });
});
