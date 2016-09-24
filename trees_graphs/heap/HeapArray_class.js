
// http://eloquentjavascript.net/1st_edition/appendix2.html

class BinaryHeap {
  constructor() {
    this.items = [];
  }

  push(value) {
    this.items.push(value);
    this.bubbleUp(this.items.length - 1);
  }

  pop() {
    // store root to return later
    const root = this.items[0];

    // get the last element
    const last = this.items.pop();

    // place on top and sink it
    if (this.items.length > 0) {
      this.items[0] = last;
      this.sink(0);
    }
    return root;
  }

  remove(value) {

    // iterate array to find node
    for (let i = 0; i < this.items.length; i++) {

      if (this.items[i] === value) {

        // grab the last to fill the hole left from removal
        const last = this.items.pop();

        // If the element we popped was the one to remove, we're done.
        if (i === this.items.length - 1) break;

        // Otherwise, replace the removed with last and bubble or sink as appropriate
        this.items[i] = last;
        this.bubbleUp(i);
        this.sink(i);
        break;
      }
    }
  }

  size() {
    return this.items.length;
  }

  bubbleUp(node) {
    // cannot go up further than root.
    while (node > 0) {
      // Compute the parent element's index, and fetch it.
      const parentNode = Math.floor((node + 1) / 2) - 1;

      // grab values
      const nodeValue = this.items[node];
      const parentValue = this.items[parentNode];

      // If test passes, swap node with parent
      if (nodeValue < parentValue) {
        this.items[parentNode] = nodeValue;
        this.items[node] = parentValue;
        node = parentNode;

      // oterwise, we're done
      } else {
        break;
      }
    }
  }

  sink(node) {
    // Look up node and its score.
    const nodeValue = this.items[node];

    while(true) {
      // Compute the indices of children.
      const left = (node + 1) * 2;
      const right = left - 1;

      // store the new position of the element, if any.
      let swap = null;

      // If left exists, grab score and compare it
      if (left < this.items.length) {
        const leftValue = this.items[left];

        // If score is less than item's, swap them.
        if (leftValue < nodeValue) {
          swap = left;
        }
      }

      // Do the same for the right.
      if (right < this.items.length) {
        const rightValue = this.items[right];
        const leftValue = this.items[left];

        if (rightValue < (swap == null ? nodeValue : leftValue)) {
          swap = right;
        }
      }

      // No need to swap further, we are done.
      if (swap == null) break;

      // Otherwise, swap and continue.
      this.items[node] = this.items[swap];
      this.items[swap] = nodeValue;
      node = swap;
    }
  }
}

const heap = new BinaryHeap();

heap.push(5);
heap.push(15);
heap.push(25);
heap.push(3);
heap.push(45);
heap.push(1);
heap.push(2);

console.log(heap.items); // [1, 5, 2, 15, 45, 25, 3]

heap.pop();

console.log(heap.items); // [2, 5, 3, 15, 45, 25]

heap.remove(15);

console.log(heap.items); // [2, 5, 3, 25, 45]

export default BinaryHeap;
