
/**
* Graphs
*
* Graph data structures consists of a finite (and possibly mutable) set of vertices
* or nodes or points, together with a set of unordered pairs of these vertices for
* an undirected graph or a set of ordered pairs for a directed graph.
*
* Graphs are basically therefore divided into two broad categories:
*
* - Directed Graph: Where edges have direction, either one way or both ways, or a combination.
* - Undirected Graph: Where edges do not represent any directed
*
* Let's look at some examples...
*
* A directed graph looks something like the following. Notice, some edges going
* only one way and others that are bi-directional.
*
*     A –→ B ←–––– C → D ↔ E
*     ↑    ↕     ↙ ↑     ↘
*     F –→ G → H ← I ––––→ J
*          ↓     ↘ ↑
*          K       L
*
* An undirected graph looks like this:
*
*     A – B ––––  C
*     |   |     / |
*     F – G - H - I
*         |       |
*         K       L
*
* A graph may also associate to each edge some edge value, such as a symbolic label
* or a numeric attribute (cost, capacity, length, etc.). For example, imagine
* graphs where each node represents a destination within a city and each edge
* has a 'travel time' cost associated with it.
*
* Another example may be, each node representing a device on a network and each
* edge has a latency cost associated with it.
*
* An undirected graph. Each node represents a node on a network and each edge is
* weighted with latency costs. For example, the path A → F → G has a latency cost of 5 (2 + 3)
*
*         (2)   (3)
*       A –– B ––––– C
*   (2) |            | (1)
*       F –– G ––––– I
*        (3)    (1)
*
*
* REPRESENTATION
*
* Graphs are abstract structures. So how do we represent them in JavaScript?
* There are different ways of representing a graph, each of them with its own
* advantages and disadvantages.
*
* Here are the main 3 implementations:
*
* 1. Edge List:
*
* One simple way to represent a graph is just a list, or array, of edges, which
* we call an edge list. To represent an edge, we just have an array of two vertex
* numbers, or an array of objects containing the vertex numbers of the vertices
* that the edges are incident on. If edges have weights, add either a third element
* to the array or more information to the object, giving the edge's weight. Since
* each edge contains just two or three numbers, the total space for an edge list
* is O(e).
*
* Take the following graph:
*
*     A – B ––––  C
*     |   |     / |
*     F – G - H - I
*         |       |
*         K       L
*
* We could represent that as:
*
* [
*   ['A', 'B'],
*   ['A', 'F'],
*   ['B', 'C'],
*   ['B', 'G'],
*   ['C', 'I'],
*   ['C', 'H'],
*   ['F', 'G'],
*   ['G', 'H'],
*   ['G', 'K'],
*   ['H', 'I'],
*   ['I', 'L'],
* ]
*
* Again, if we wanted to add some weight or cost to the edge we could configure
* a third value for every edge, like so: ['A', 'B', 7], where 7 represents the cost.
*
* Also, note that we have single character string values here but a node value can
* really be any type of value.
*
* Notice how we are careful not to duplicate edges either. As we traverse our graph
* and define the edges, we only add those not already defined previously. For example,
* when we get to node (F), we only add the ['F', 'G'] edge as we already defined ['A', 'F'],
* which is technically also ['F', 'A'], as these are non-directional.
*
* Edge lists are simple, but if we want to find whether the graph contains a particular
* edge, we have to search through the edge list. If the edges appear in the edge
* list in no particular order, that's a linear search through E, edges.
*
* In practice, these representations are probably the least common.
*/

/**
*
* 2. Adjacency Matrix:
*
* To obtain the adjacency matrix of the graph, we first label the rows and columns
* with the corresponding ordered vertices. If there exists an edge between two vertices
* and, then their corresponding cell in the matrix will be assigned. If there
* does not exist an edge, then the cell will be assigned the value.
*
* If a graph has a high density, that is many edges, then a adjacency matrix may
* help save memory. Otherwise, if a graph is sparse that is few edges, then an
* adjacency list could be better for space.
*
* Key Operations: vertex (v), edge (e)
*
* insert node:  O(v^2)
* insert edge:  O(1)
* find:         O(1)
* space:        O(v^2)
*
* Say we have the following graph:
*
*     B –––– A – C
*            | / |
*            E   D
*
* The adjacency matrix for the graph above is thus:
*/

//     A  B  C  D  E
//  A [0, 1, 1, 0, 1]
//  B [1, 0, 0, 0, 0]
//  C [1, 1, 0, 1, 1]
//  D [0, 1, 1, 0, 0]
//  E [1, 1, 1, 0, 0]

/**
*
* 3. Adjacency List:
*
* For every vertex a list of adjacent vertices is stored. This can be viewed as
* storing the list of edges. This data structure allows the storage of additional
* data on the vertices and edges.
*
* Key Operations: vertex (v), edge (e)
*
* insert node:  O(1)
* insert edge:  O(1)
* find:         O(v)
* space:        O(v + e)
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
* Note: This is a DG implementation. When we insert an edge we have a 'start'
* and and 'end' node.
*/

class Graph {
  constructor() {
    this.nodes = [];
    this.edges = [];
  }

  /**
  * insertNode()
  *
  * @param {*} value
  * @return {void}
  */

  insert(value) {
    this.nodes.push({
      value,
      edges: [],
    });
  }

  /**
  * removeNode()
  *
  * @param {*} value
  * @return {void}
  */

  removeNode(value) {
    const found = this.nodes.findIndex((n) => n.value === value);

    if (found !== -1) {
      return this.nodes.splice(found, 1);
    }

    // not found
    return null;
  }

  /**
  * getNodes()
  *
  * @return {array} values only
  */

  getNodes() {
    return this.nodes.map((n) => n.value);
  }

  /**
  * getedges()
  *
  * @return {array}
  */

  getEdges() {
    return this.edges;
  }

  /**
  * findNode()
  *
  * @param {*} value
  * @return {object}
  */

  find(value) {
    return this.nodes.find((n) => n.value === value);
  }

  /**
  * insertEdge()
  *
  * This is a directed graph implementation. 'start' and 'end'
  *
  * @param {*} start
  * @param {*} end
  * @return {void}
  */

  insertEdge(start, end) {
    const startNode = this.find(start);
    const endNode = this.find(end);

    // error if they don't exist
    if (!startNode || !endNode) {
      throw new Error('Both nodes need to exist');
    }

    this.edges.push([startNode.value, endNode.value]);

    // push edge
    startNode.edges.push(endNode);
  }
}

export default Graph;
