
import { expect } from 'chai';
import ThreeInOne from '../three_in_one';

describe('ThreeInOne', () => {
  it('should construct a ThreeInOne class', () => {
    const tripleStack = new ThreeInOne();

    expect(tripleStack.array).to.a('array');
    expect(tripleStack.array).to.be.empty;

    expect(tripleStack.lengths.length).to.equal(3);
    expect(tripleStack.lengths[0]).to.equal(0);
  });

  it('should return push a frame to 3 different stacks', () => {
    const tripleStack = new ThreeInOne();
    tripleStack.push(1, 1);
    tripleStack.push(1, 2);
    tripleStack.push(1, 3);
    tripleStack.push(2, 1);
    tripleStack.push(3, 1);

    expect(tripleStack.array[0]).to.equal(1);
    expect(tripleStack.array[1]).to.equal(1);
    expect(tripleStack.array[2]).to.equal(1);
    expect(tripleStack.array[3]).to.equal(2);
    expect(tripleStack.array[4]).to.equal(undefined);
  });

  it('should return the length of the 3 different stacks', () => {
    const tripleStack = new ThreeInOne();
    tripleStack.push(1, 1);
    tripleStack.push(1, 2);
    tripleStack.push(3, 1);

    expect(tripleStack.getLength(1)).to.equal(2);
    expect(tripleStack.getLength(3)).to.equal(1);
    expect(tripleStack.getLength(2)).to.equal(0);
  });

  it('should return pop a frame from 3 different stacks', () => {
    const tripleStack = new ThreeInOne();
    tripleStack.push(1, 1);
    tripleStack.push(1, 2);

    expect(tripleStack.pop(1)).to.equal(2);
    expect(tripleStack.pop(2)).to.equal(null);
  });

  it('should return peek values from 3 different stacks', () => {
    const tripleStack = new ThreeInOne();
    tripleStack.push(1, 1);
    tripleStack.push(1, 2);

    expect(tripleStack.peek(1)).to.equal(2);
    expect(tripleStack.peek(2)).to.equal(null);
  });

  it('should check if 3 different stacks are empty', () => {
    const tripleStack = new ThreeInOne();
    tripleStack.push(1, 1);
    tripleStack.push(3, 1);

    expect(tripleStack.isEmpty(1)).to.be.false;
    expect(tripleStack.isEmpty(3)).to.be.false;
    expect(tripleStack.isEmpty(2)).to.be.true;
  });
});
