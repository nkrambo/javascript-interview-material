
/**
* BFS
*
* In BFS, we start at the root (or another arbitraily selected node) and explore
* each neighbour before going to any of their children. That is, we go wide
* (hence the name) before we go deep.
*
* If you want to find the shortest path (or just any path) between nodes,
* BFS is generally better than DFS.
*
* Consider representing all the friendships in the entire world in a graph and
* trying to find a path of friendship between 'Ash' and 'Vanessa'.
*
* In a DFS, we would take a path like:
*
* Ash -> Brian -> Carleton -> Davis -> Eric -> Farah -> Gayle -> Harry...
*
* Only find ourselves very far away. We could go through most of the world without
* realising that, in fact, Vanessa is Ash's friend afterall. We will eventually
* find the path, but using this approach may take a very long time. It also won't
* find us the shortest path.
*
* In BFS, we would stay close to Ash as long as possible. We might iterate through
* many of Ash's friends, but we wouldn't go to his more distant connections until
* absolutely necessary. If Vanessa is Ash's friend, or his friend-of-a-friend,
* we'll find this relatively quickly.
*
* Let's take the following graph, for example.
*
*     0 → 1 ← 2             BFS
*     ↓ ↘ ↓ ↘ ↑             Node 0
*     5   4 ← 3             Node 1
*                           Node 4
*                           Node 5
*                           Node 3
*                           Node 2
*
* BFS is less intuitive than DFS. BFS is not recursive, it uses a queue. In BFS,
* node 0 visits each of it's neighbours before visiting any of their neighbours.
* You can think of this as searching level by level out from 0. An iterative solution
* using a queue usually works best.
*
* Time: O(V * E)
* Space: O(V)
*
* Where V is the number of vertices (nodes) and E is the number of edges (relationships)
*
* @param {*} root node of graph
* @return {array} returns the order of node values from BFS
*/

function bfs(root) {
  root.marked = true;
  const queue = [root];
  const order = [];

  while (queue.length) {
    const node = queue.shift();
    order.push(node.value);

    node.edges.forEach((edge) => {
      if (!edge.marked) {
        edge.marked = true;
        queue.push(edge);
      }
    });
  }

  return order;
}

export default bfs;
