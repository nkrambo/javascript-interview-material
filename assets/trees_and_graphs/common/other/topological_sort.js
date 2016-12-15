
/**
* Topological Sort
*
* A topological sort of a directed graph is a way of ordering the list of nodes
* such that if (a, b) is an edge in the graph then 'a' will appear before 'b' in
* the list. If a graph has cycles or is not directed, then there is no topological
* sort. That is, if it is a directed acyclic graph (DAG). Any DAG has at least one
* topological ordering, and algorithms are known for constructing a topological
* ordering of any DAG in linear time.
*
*
*          F        D
*        ↙ | ↘      ↓
*      C   |   B    G
*        ↘ ↓ ↙ |
*          A   |
*          ↓  ↙
*          E
*
* There are a number of applications for this. For example, suppose the graph
* represents parts on an assembly line. The edge (Handle, Door) indicates that
* you need to assemble the handle before the door. The topological sort would
* offer a valid ordering for the assembly line.
*
* There are two common approaches to solving these problems.
*
* Kahn's algorithm
*
* This algorithm works by choosing vertices in the same order as the eventual
* topological sort.
*
* First, find a list of "start nodes" which have no incoming edges and insert them
* into a set, queue or a stack; at least one such node must exist in a non-empty
* acyclic graph. These nodes have no dependencies and can be sorted immediately
* and added to our results. In our above example, these would be nodes (F, D), so
* we can add them to results either [F, D] or [D, F]. This reflects that the solution
* is not necessarily unique.
*
* Once we've done that, it's irrelevant that some nodes are dependent on 'D' and
* 'F', since they have already been sorted. We can reflect this new state by removing
* 'D' and 'Fs' outgoing edges. So we end up with something like:
*
*         (F)      (D)
*
*      C       B    G
*        ↘   ↙ |
*          A   |
*          ↓  ↙
*          E
*
* Next, using the same logic as before, we know that C, B, and G are free to sort
* since they now also have no incoming edges. Let's add them to the sorted results
* too. [F, D, C, B, G]
*
*         (F)      (D)
*
*      (C)    (B)  (G)
*
*          A
*          ↓
*          E
*
* 'A' now has no incoming edges, we can sort that too and then finally, we can
* sort 'E' to give us our final sorted results of [F, D, C, B, G, A, E].
*
* What if there are nodes remaining, but all have dependencies (incoming edges)?
* This means there's no way to sort nodes and we should return an error.
*
* This is really a BFS approach.
*
* Time: O(P + D)
* Space: O(P)
*
* Where P is the number of projects and D is the number of dependeny pairs.
*/

function kahnSort(graph) {
  const sorted = [];
  const queue = [];

  // grab a starting point by finding all nodes with no degree, or 0 edges
  // this should come first lexicographically
  for (let [key, value] of degree) {
    if (value === 0) queue.push(key);
  }

  while (queue.length) {
    const node = queue.shift();
    sorted.push(node);


  }

  return sorted;
}

/**
* DFS Sort
*
* An alternative algorithm for topological sorting is based on depth-first search.
* The algorithm loops through each node of the graph, in an arbitrary order,
* initiating a depth-first search that terminates when it hits any node that has
* already been visited since the beginning of the topological sort or the node has
* no outgoing edges (i.e. a leaf node).
*
* Suppose we picked an arbitrary node (say B) and performed a DFS on it. When we
* get to the end of a path and can't go any further (which happens to be at E),
* we know that those terminating nodes can be the last projects to be built. No
* projects depend on them.
*
* Now consider what happens at node A when we return from a DFS of E. All of its
* dependencies have been sorted, which means that we're free to sort A. And once
* we've sorted A, we know that all of B's dependencies have been sorted. We can
* now sort B.
*
* Let's use our top example again and step through this approach.
*
*
*          F        D
*        ↙ | ↘      ↓
*      C   |  (B)   G
*        ↘ ↓ ↙ |
*         (A)  |
*          ↓  ↙
*         (E)
*
*
* DFS(B)
*   DFS(E) ... sort order = [..., E]
*   DFS(A)
*     DFS(E) ... sort order = [..., A, E]
*   DFS(E) -> return
*   ... sort order = [..., B, A, E]
*
* Now, we can start with any old node again, doing a DFS on it and then adding
* the node to the front of the sorting order queue when the DFS is completed.
*
* DFS(D)
*   DFS(G)
*     ... sort order = [..., G, B, A, E]
*   ... sort order = [..., D, G, B, A, E]
*
* And again...
*
* DFS(F)
*   DFS(C)
*     ... sort order = [..., C, G, B, A, E]
*   ... sort order = [F, C, D, G, B, A, E]
*
* In this algorithm we need to think about the issue of cycles. If there is a cycle
* then there cannot be a valid sort order. But still, we don't want to get stuck
* in an infinite loop just because there's no possible solution.
*
* A cycle will happen if, while perfoming a DFS we run back into the same path.
* We therefore need to attach some state properties to our nodes to help us detect
* a cycle. We can mark each node as a 'partial' (or 'is visiting') state just before
* we start the DFS on it. If we see any other node with a 'partial' state, then
* we know that we do not have a DAG. When we're done with this node's DFS, we need
* to update the state.
*
* We also need to state to represent nodes that have already been sorted, so that
* we don't re-sort them. Our state therefore needs three properties:
*
* - completed
* - partial
* - blank
*
* Time: O(P + D)
* Space: O(P)
*
* Where P is the number of projects and D is the number of dependeny pairs.
*/

function dfsSort() {

}

export { kahnSort, dfsSort };
