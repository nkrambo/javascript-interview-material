
/**
* Bellman Ford's Algorithm
*
* The Bellman–Ford algorithm is an algorithm that computes shortest paths from a
* single source vertex to all of the other vertices in a weighted digraph. It is
* slower than Dijkstra's algorithm for the same problem, but more versatile, as
* it is capable of handling graphs in which some of the edge weights are negative
* numbers.
*
* Like Dijkstra's Algorithm, Bellman–Ford  is based on the principle of relaxation,
* in which an approximation to the correct distance is gradually replaced by more
* accurate values until eventually reaching the optimum solution.
*
* Dijkstra's algorithm uses a priority queue to greedily select the closest vertex
* that has not yet been processed, and performs this relaxation process on all of
* its outgoing edges; by contrast, the Bellman–Ford algorithm simply relaxes all
* the edges, and does this for all vertices in the graph. In each of these repetitions,
* the number of vertices with correctly calculated distances grows, from which it
* follows that eventually all vertices will have their correct distances.
*
* Simply put, the algorithm initializes the distance to the source to 0 and all
* other nodes to infinity. Then for all edges, if the distance to the destination
* can be shortened by taking the edge, the distance is updated to the new lower
* value. At each iteration i that the edges are scanned, the algorithm finds all
* shortest paths of at most length i edges (and possibly some paths longer than i
* edges). Since the longest possible path without a cycle can be |V|-1 edges, the
* edges must be scanned |V|-1 times to ensure the shortest path has been found for
* all nodes. A final scan of all the edges is performed and if any distance is updated,
* then a path of length |V| edges has been found which can only occur if at least
* one negative cycle exists in the graph.
*
*    (-6)  A   (2)            A: 0
*        ↙  ↘                 B: -6
*       B  ←  C   (3)         C: 2
*        ↘   ↙                D: -7
*    (-1)  D   (5)
*
* Time: O(n log e)
* Space: O(n)
*
* Where (n) is the number of nodes and (e) is the number of edges.
*
* @param {object} source node
* @param {class} graph class that contains source
* @return {array} returns an array
*/

function bellmanFord(source, graph) {
  const costs = new Map();
  const results = [];

  // step 1:
  // initialize all nodes with cost of infinity
  graph.nodes.forEach((n) => {
    costs.set(n, Infinity);
  });

  costs.set(source, 0); // set source to 0

  // step 2:
  // relax edges repeatedly
  graph.nodes.forEach((n) => {
    n.edges.forEach((e) => {
      if (costs.get(n) + e.cost < costs.get(e.endNode)) {
        costs.set(e.endNode, costs.get(n) + e.cost);
      }
    });
  });

  // step 3:
  // check for negative-weight cycles
  graph.nodes.forEach((n) => {
    n.edges.forEach((e) => {
      if (costs.get(n) + e.cost < costs.get(e.endNode)) {
        throw new Error('Graph contains a negative-weight cycle');
      }
    });
  });

  // step 4:
  // build answer
  costs.forEach((cost, key) => {
    results.push({
      node: key.value,
      cost,
    });
  });

  return results;
}

export default bellmanFord;
