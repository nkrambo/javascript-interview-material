
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
*/


