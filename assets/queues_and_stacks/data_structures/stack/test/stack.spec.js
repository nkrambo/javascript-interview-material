
import Stack from '../stack';

describe('Stack', () => {
  test('should push a new frame, insert', () => {
    const stackOne = new Stack();
    stackOne.push(20);
    stackOne.push(30);

    expect(stackOne.length).toBe(2);
    expect(stackOne.items[0]).toBe(20);
    expect(stackOne.items[1]).toBe(30);
  });

  test('should pop the top frame, remove', () => {
    const stackTwo = new Stack();
    stackTwo.push(50);
    stackTwo.push(100);

    const topFrame = stackTwo.pop();
    expect(topFrame).toBe(100);
    expect(stackTwo.length).toBe(1);
  });

  test('should return the top frame value, peek', () => {
    const stackThree = new Stack();
    stackThree.push(55);
    stackThree.push(65);

    expect(stackThree.peek()).toBe(65);
  });
});
