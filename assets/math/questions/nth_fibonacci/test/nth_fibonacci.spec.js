
import { expect } from 'chai';
import { fib, fibRecursive } from '../nth_fibonacci';

describe('fib()', () => {
  it('should return the nth fibonacci number', () => {
    expect(fib(0)).to.equal(0);
    expect(fib(1)).to.equal(1);
    expect(fib(2)).to.equal(1);
    expect(fib(3)).to.equal(2);
    expect(fib(4)).to.equal(3);
    expect(fib(5)).to.equal(5);
    expect(fib(6)).to.equal(8);
  });

  it('should throw an error if n is negative', () => {
    expect(() => { fib(-1); }).to.throw(Error);
  });
});

describe('fibRecursive()', () => {
  it('should return the nth fibonacci number', () => {
    expect(fibRecursive(0)).to.equal(0);
    expect(fibRecursive(1)).to.equal(1);
    expect(fibRecursive(2)).to.equal(1);
    expect(fibRecursive(3)).to.equal(2);
    expect(fibRecursive(4)).to.equal(3);
    expect(fibRecursive(5)).to.equal(5);
    expect(fibRecursive(6)).to.equal(8);
  });
});
