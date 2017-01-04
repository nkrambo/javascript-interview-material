
/**
* Route Between Nodes
*
* Tags: Map, BFS
*
* Given a directed graph, design an algorithm to find out whether there is
* a route between two nodes.
*/

/**
* Route between nodes
*
* Solution:
*
* This can be solved with a simple graph traversal, such as DFS or BFS.
* We start with one of the nodes and, during traversal, check if the other node
* is found. We keep track of alread visited nodes with a set to avoid cycles.
*
* Time: O(n)
* Space: O(n)
*
* We visit every node in the worse case and also place alll our nodes into our
* Set, hence the O(n) time and space complexities.
*
* @param {object} start Node to start at
* @param {object} end Node to end at
* @return {boolean} Returns true if a route exists, otherwise returns false
*/

function routeBetweenNodes(start, end) {

  // short-circuit
  if (start === end) return true;

  // BFS
  const visited = new Set();
  const queue = [start];

  while (queue.length) {

    // dequeue and grab edges
    const node = queue.shift();
    const edges = node.edges;

    //
    for (let i = 0; i < edges.length; i += 1) {
      const edge = edges[i];

      // check for cycle
      if (!visited.has(edge)) {

        // if we reached the end, we found a route
        if (edge === end) return true;

        // add to set and enqueue next pointed node
        visited.add(edge);
        queue.push(edge);
      }
    }
  }

  // fell through, no route
  return false;
}

export default routeBetweenNodes;
