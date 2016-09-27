
/**
 * Graphs
 *
 * Looks something like this:
 *
 *     A –→ B ←–––– C → D ↔ E
 *     ↑    ↕     ↙ ↑     ↘
 *     F –→ G → H ← I ––––→ J
 *          ↓     ↘ ↑
 *          K       L
 *
 * We have a bunch of "nodes" (A, B, C, D, ...) that are connected with lines.
 *
 * These nodes are going to look like this:
 *
 *     Node {
 *       value: ...,
 *       edges: [(Node), (Node), ...]
 *     }
 *
 * The entire graph will look like this:
 *
 *     Graph {
 *       nodes: [
 *         Node {...},
 *         Node {...},
 *         ...
 *       ]
 *     }
 */

class Graph {

  /**
   * Graph constructor, sets an array to keep track of nodes.
   *
   * @public
   * @constructor
   */

  constructor() {
    this._nodes = [];
  }

  /**
   * Adds new node to the graph.
   * Complexity: O(1).
   *
   * @public
   * @param {Number|Object} value Value which will be inserted.
   */

  add(value) {
    this._nodes.push({
      value: value,
      edges: []
    });
  }

  /**
   * Find node
   * Complexity: O(n).
   *
   * @public
   * @param {Number|Object} value Value which we're looking for.
   */

  find(value) {
    return this._nodes.find((node) => {
      return node.value === value;
    });
  }

  /**
   * Add edge
   * Complexity: O(n).
   *
   * @public
   * @param {Number|Object} startValue Value The value where the edge originates
   * @param {Number|Object} endValue Value The value where the edge ends
   */

  addEdge(startValue, endValue) {
    const startNode = this.find(startValue);
    const endNode = this.find(endValue);

    // error if they don't exist
    if (!startNode || !endNode) {
      throw new Error('Both nodes need to exist');
    }

    // push edge
    startNode.edges.push(endNode);
  }
}

export default Graph;
