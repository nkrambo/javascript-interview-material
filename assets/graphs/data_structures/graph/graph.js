
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
* weighted with latency costs. For example, the path A → F → G has a latency cost of 5
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
* Here are the main 2 implementations:
*
* 1. Adjacency List:
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
*/

class Graph {
  constructor() {
    this.nodes = [];
  }

  /**
  * insert()
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
  * find()
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

    // push edge
    startNode.edges.push(endNode);
  }
}

/**
* 2. Adjacency Matrix:
*
* Data are stored in a two-dimensional matrix, in which the rows represent source
* vertices and columns represent destination vertices. The data on the edges and
* vertices must be stored externally.
*
* Key Operations: vertex (v), edge (e)
*
* insert node:  O(v^2)
* insert edge:  O(1)
* find:         O(1)
* space:        O(v^2)
*/

export default Graph;
