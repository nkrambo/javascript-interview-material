
import MaxStack from '../max_stack';

describe('MaxStack', () => {
  test('should return the max value in the stack', () => {
    const stack = new MaxStack();
    stack.push(5);
    stack.push(34);
    stack.push(3);
    stack.push(154);
    stack.push(78);
    stack.push(66);

    expect(stack.getMax()).toBe(154);
  });
});
