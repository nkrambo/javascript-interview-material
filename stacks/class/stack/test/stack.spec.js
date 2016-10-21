
import { expect } from 'chai';
import Stack from '../stack';

describe('Stack', () => {
  it('should push a new frame, insert', () => {
    const stackOne = new Stack();
    stackOne.push(20);
    stackOne.push(30);

    expect(stackOne.length).to.equal(2);
    expect(stackOne.items[0]).to.equal(20);
    expect(stackOne.items[1]).to.equal(30);
  });

  it('should pop the top frame, remove', () => {
    const stackTwo = new Stack();
    stackTwo.push(50);
    stackTwo.push(100);

    const topFrame = stackTwo.pop();
    expect(topFrame).to.equal(100);
    expect(stackTwo.length).to.equal(1);
  });

  it('should return the top frame value, peek', () => {
    const stackThree = new Stack();
    stackThree.push(55);
    stackThree.push(65);

    expect(stackThree.peek()).to.equal(65);
  });
});
