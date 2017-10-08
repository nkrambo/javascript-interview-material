
import { expect } from 'chai';
import isValid from '../valid_parentheses';

describe('isValid()', () => {
  test('should return true if all brackets are balanced', () => {
    expect(isValid('{ [ ] ( ) }')).to.be.true;
  });

  test('should return false if brackets are unbalanced', () => {
    expect(isValid('{ [ ( ] ) }')).to.be.false;
    expect(isValid('{ [ }')).to.be.false;
  });
});
