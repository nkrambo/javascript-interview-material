
/**
 * TripleStack class holds 3 stacks in one array. This is done by interleaving
 * the values from the 3 indexes, so the first items are at 0, 1 and 2 and
 * subsequent items are every 3 places from those. This class takes advantage
 * of the fact that JavaScript arrays are dynamic and doesn't hold the stacks
 * to any size. It doesn't reduce the size of the underlying array when items
 * are popped but that could easily be added.
 *
 * Time: push O(1), pop O(1), peek O(1)
 * Additional space: push O(1), pop O(1), peek O(1)
 */

class TripleStack {
  constructor() {
    this.array = [];
    this.lengths = [0, 0, 0];
  }

  getLength(stack) {
    return this.lengths[stack - 1];
  }

  push(stack, value) {
    let idx = this.getLength(stack) * 3 + stack - 1;
    this.array[idx] = value;
    this.lengths[stack - 1]++;
  }

  pop(stack) {
    let length = this.getLength(stack);
    let value;
    if (length > 0) {
      let idx = (length - 1) * 3 + stack - 1;
      value = this.array[idx];
      this.array[idx] = undefined;
      this.lengths[stack - 1]--;
    }
    return value;
  }

  peek(stack) {
    let length = this.getLength(stack);
    let value;
    if (length > 0) {
      let idx = (length - 1) * 3 + stack - 1;
      value = this.array[idx];
    }
    return value;
  }

  isEmpty(stack) {
    return this.getLength(stack) === 0;
  }
}

export default TripleStack;
