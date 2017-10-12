
import ThreeInOne from '../three_in_one';

describe('ThreeInOne', () => {
  test('should construct a ThreeInOne class', () => {
    const tripleStack = new ThreeInOne();
    expect(tripleStack.lengths.length).toBe(3);
    expect(tripleStack.lengths[0]).toBe(0);
  });

  test('should return push a frame to 3 different stacks', () => {
    const tripleStack = new ThreeInOne();
    tripleStack.push(1, 1);
    tripleStack.push(1, 2);
    tripleStack.push(1, 3);
    tripleStack.push(2, 1);
    tripleStack.push(3, 1);

    expect(tripleStack.array[0]).toBe(1);
    expect(tripleStack.array[1]).toBe(1);
    expect(tripleStack.array[2]).toBe(1);
    expect(tripleStack.array[3]).toBe(2);
    expect(tripleStack.array[4]).toBeUndefined();
  });

  test('should return the length of the 3 different stacks', () => {
    const tripleStack = new ThreeInOne();
    tripleStack.push(1, 1);
    tripleStack.push(1, 2);
    tripleStack.push(3, 1);

    expect(tripleStack.getLength(1)).toBe(2);
    expect(tripleStack.getLength(3)).toBe(1);
    expect(tripleStack.getLength(2)).toBe(0);
  });

  test('should return pop a frame from 3 different stacks', () => {
    const tripleStack = new ThreeInOne();
    tripleStack.push(1, 1);
    tripleStack.push(1, 2);

    expect(tripleStack.pop(1)).toBe(2);
    expect(tripleStack.pop(2)).toBeNull();
  });

  test('should return peek values from 3 different stacks', () => {
    const tripleStack = new ThreeInOne();
    tripleStack.push(1, 1);
    tripleStack.push(1, 2);

    expect(tripleStack.peek(1)).toBe(2);
    expect(tripleStack.peek(2)).toBeNull();
  });

  test('should check if 3 different stacks are empty', () => {
    const tripleStack = new ThreeInOne();
    tripleStack.push(1, 1);
    tripleStack.push(3, 1);

    expect(tripleStack.isEmpty(1)).toBeFalsy();
    expect(tripleStack.isEmpty(3)).toBeFalsy();
    expect(tripleStack.isEmpty(2)).toBeTruthy();
  });
});
