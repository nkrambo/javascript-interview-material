
/**
* Graph Search
*
* The two most common ways to search a graph are depth-first search (DFS) and
* breadth-first search (BFS).
*
* In DFS, we start at the root (or another arbitraily selected node) and explore
* each branch completely before moving onto the next branch. That is, we go deep
* first (hence the name) before we go wide.
*
* In BFS, we start at the root (or another arbitraily selected node) and explore
* each neighbour before going to any of their children. That is, we go wide
* (hence the name) before we go deep.
*
* Let's take the following graph, for example.
*
*     0 → 1 ← 2         DFS                   BFS
*     ↓ ↘ ↓ ↘ ↑         Node 0                Node 0
*     5   4 ← 3           Node 1              Node 1
*                           Node 3            Node 4
*                             Node 2          Node 5
*                             Node 4          Node 3
*                       Node 5                Node 2
*
*
* DFS and BFS tend to be used in different scenarios. DFS is often preferred if
* you want to visit every node. Both will work fine, but DFS is a little simpler.
*
* However, if you want to find the shortest path (or just any path) between nodes,
* BFS is generally better.
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
*/

/**
* DFS
*
* Using our above example. In DFS, we visit node 0 and then iterate through each
* of 0's neighbours. When visiting node 1, that is a neighbour of 0, we visit all
* of 1's neighbours before going onto 0's other neighbours. That is, 0 exhaustively
* search's 1's branches before any of it's other neighbours.
*
* Note that pre-order and other forms of tree traversal are a form of DFS. The key
* difference is that when implementing this algorithm for a graph, we must check
* if the node has been visited. If we don't we risk getting stuck in an infinite
* loop, or cycle.
*
* Although you can do a recursive DFS, you can also easily achieve this iteratively
* using a stack.
*
* Time: O(V * E)
* Space: O(V)
*
* Where V is the number of vertices (nodes) and E is the number of edges (relationships)
*
* @param {*} root node of graph
* @return {array} returns the order of node values from DFS
*/

function DFS(root) {
  root.marked = true;
  const stack = [root];
  const order = [];

  while (stack.length) {
    const node = stack.pop();
    order.push(node.value);

    node.edges.forEach((edge) => {
      if (!edge.marked) {
        edge.marked = true;
        stack.push(edge);
      }
    });
  }

  return order;
}

/**
* BFS
*
* BFS is less intuitive. BFS is not recursive, it uses a queue. In BFS, node 0
* visits each of it's neighbours before visiting any of their neighbours. You can
* think of this as searching level by level out from 0. An iterative solution using
* a queue usually works best.
*
* Time: O(V * E)
* Space: O(V)
*
* Where V is the number of vertices (nodes) and E is the number of edges (relationships)
*
* @param {*} root node of graph
* @return {array} returns the order of node values from BFS
*/

function BFS(root) {
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

export { DFS, BFS };
