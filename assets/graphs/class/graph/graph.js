
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
*
* We can use a graph like this:
*
* const graph = new Graph();
* graph.insert(1);
* graph.insert(2);
* graph.insertEdge(1, 2);
*
* const two = graph.find(1).lines[0];
*
* This might seem like a lot of work to do very little, but it's actually a
* quite powerful pattern, especially for finding sanity in complex programs.
*
* They do this by optimizing for the connections between data rather than
* operating on the data itself. Once you have one node in the graph, it's
* extremely simple to find all the related items in the graph.
*
* Tons of things can be represented this way, users with friends, the 800
* transitive dependencies in a node_modules folder, the internet itself is a
* graph of webpages connected together by links.
*
*
*
*                      Access       Search       Insert
* -----------------------------------------------------------------------------
*          Graph        O(N)         O(N)         O(1)
*/

class Graph {

  constructor() {
    this.nodes = [];
  }

  /**
  * insert()
  *
  * @param {*} value to add
  * @return {void}
  */

  insert(value) {
    this.nodes.push({
      value,
      edges: []
    });
  }

  /**
  * find()
  *
  * @param {*} value to find
  * @return {object}
  */

  find(value) {
    return this.nodes.find((n) => n.value === value);
  }

  /**
  * insertEdge()
  *
  * @param {*} start value of edge
  * @param {*} end value of edge
  * @return {void}
  */

  insertEdge(start, end) {
    const startNode = this.find(start);
    const endNode = this.find(end);

    // error if they don't exist
    if (!startNode || !endNode) {
      throw new Error('Both nodes need to exist');
    }

    // push edge
    startNode.edges.push(endNode);
  }
}

export default Graph;
