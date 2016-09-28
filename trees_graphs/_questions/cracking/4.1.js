
/**
* Route Between Nodes
*
* Given a directed graph, design an algorithm to find out whether there is
* a route between two nodes.
*
* Solution: This can be solved with a simple graph traversal, such as DFS or BFS.
* We start with one of the nodes and, during traversal, check if the other node
* is found. We keep track of alread visited nodes with a set to avoid cycles.
*/

/**
* Route between nodes
*
* @param {class} graph Directed graph class to check for routes
* @param {object} start Node to start at
* @param {object} end Node to end at
* @return {boolean} Returns true if a route exists, otherwise returns false
*/

function routeBetweenNodes(graph, start, end) {
  if (start === end) return true;

  const visited = new Set();
  const queue = [start];

  while (queue.length) {
    const node = queue.shift();
    const edges = node.edges;

    for (let i = 0; i < edges.length; i++) {
      const edge = edges[i];

      if (!visited.has(edge)) {
        if (edge === end) {
          return true;
        }

        visited.add(edge);
        queue.push(edge);
      }
    }
  }
  return false;
}

export default routeBetweenNodes;
