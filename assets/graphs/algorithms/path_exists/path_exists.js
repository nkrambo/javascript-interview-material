
/**
* Path Exists
*
* We can check if a path exists between nodes in a DAG by using a BFS and returning
* true as soon as we encounter our 'end' node, otherwise we return false.
*
* Time: O(V * E)
* Space: O(V)
*
* Where V is the number of vertices (nodes) and E is the number of edges (relationships)
*
* @param {*} start node of graph
* @param {*} end node of graph
* @return {bool} true if path exists between start and end, otherwise false
*/

function pathExists(start, end) {
  start.marked = true;
  const queue = [start];

  while (queue.length) {
    const node = queue.shift();

    if (node === end) return true;

    node.edges.forEach((e) => {
      if (!e.marked) {
        e.marked = true;
        queue.push(e);
      }
    });
  }

  return false;
}

export default pathExists;
