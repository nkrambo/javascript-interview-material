
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
    this.nodes = [];
  }

  /**
   * Adds new node to the graph.
   * Complexity: O(1).
   *
   * @public
   * @param {Number|Object} value Value which will be inserted.
   */

  add(value) {
    this.nodes.push({
      value: value,
      edges: []
    });
  }

  /**
   * Next we need to be able to lookup nodes in the graph. Most of the time
   * you'd have another data structure on top of a graph in order to make
   * searching faster.
   *
   * But for our case we're simply going to search through all of nodes to find
   * the one with the matching value. This is a slower option, but it works for
   * now.
   */

  find(value) {
    return this.nodes.find(function(node) {
      return node.value === value;
    });
  }

  /**
   * Next we can connect two nodes by making a "line" from one to the other.
   */

  addEdge(startValue, endValue) {
    // Find the nodes for each value.
    const startNode = this.find(startValue);
    const endNode = this.find(endValue);

    // Freak out if we didn't find one or the other.
    if (!startNode || !endNode) {
      throw new Error('Both nodes need to exist');
    }

    // And add a reference to the endNode from the startNode.
    startNode.edges.push(endNode);
  }
}

export default Graph;
