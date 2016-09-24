
// http://eloquentjavascript.net/1st_edition/appendix2.html

class BinaryHeap {
  constructor(scoreFunction) {
    this.items = [];
    this.scoreFunction = scoreFunction;
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
      this.sinkDown(0);
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
        this.sinkDown(i);
        break;
      }
    }
  }

  size() {
    return this.items.length;
  }

  bubbleUp(node) {

    // grab item to bubble
    const item = this.items[node]

    // cannot go up further than root.
    while (node > 0) {
      // Compute the parent element's index, and fetch it.
      const parentNode = Math.floor((node + 1) / 2) - 1;
      const parent = this.items[parentNode];

      // If the parent has a lesser score, we're in order and done.
      if (score >= this.scoreFunction(parent)) break;

      // Otherwise, swap the parent with the current
      this.items[parentNode] = node;
      this.items[node] = parent;
      node = parentNode;
    }
  }

  sink(node) {
    // Look up node and its score.
    const item = this.items[node];
    const itemScore = this.scoreFunction(node);

    while(true) {
      // Compute the indices of children.
      const left = (node + 1) * 2;
      const right = left - 1;

      // store the new position of the element, if any.
      let swap = null;

      // If left exists, grab score and compare it
      if (left < this.items.length) {
        const leftScore = this.scoreFunction(this.items[left]);

        // If score is less than item's, swap them.
        if (leftScore < itemScore) {
          swap = left;
        }
      }

      // Do the same for the right.
      if (right < this.items.length) {
        const rightScore = this.scoreFunction(this.items[right]);
        if (rightScore < (swap == null ? itemScore : leftScore)) {
          swap = right;
        }
      }

      // No need to swap further, we are done.
      if (swap == null) break;

      // Otherwise, swap and continue.
      this.items[node] = this.items[swap];
      this.items[swap] = item;
      node = swap;
    }
  }
}

export default BinaryHeap;
