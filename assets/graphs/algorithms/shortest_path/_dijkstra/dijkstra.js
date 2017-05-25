
/**
* Dijkstra's Algorithm (Uniform Cost Search (UCF))
*
* With a BFS you can determine the shortest route between nodes A and C, 3 edges
* in this case. A -> B -> G -> C
*
*    (A)  →  (B)  → (G)
*     ↓               ↘
*     F  →  D →  E  → (C)
*
* But what if those edges have travel times associated with them. That is,
* each edge is weighted. Now the least amount of edges may not be the 'fastest'
* route between two nodes. This is where Dijkstra's algorithm comes in.
*
* With weighted edges we can see that our previous route (3 edges, weight 14) is
* now not the fastest. Our fastest route now is A -> F -> D -> E -> C, which
* is a total of 4 edges but a weight of 5, almost 3 times faster.
*
*         8       6
*    (A)  →   B   →  G
*  1  ↓                ↘
*    (F) → (D) → (E) → (C)
*        1     1     2
*
* Dijkstra's is used therefore for finding the shortest paths between nodes
* in directed graphs with unbounded non-negative weights. Note, that the weights
* must be positive, if you're dealing with positive and negative weigths there's
* an algorithm for that too, Bellman-Ford's algorithm.
*
* Dijkstra's algorithm exists in many variants, but the min-priority queue (with
* a minimum heap) implementation is the fastest known. However, specialized cases
* (such as bounded/integer weights, directed acyclic graphs etc.) can indeed be
* improved further as detailed specialized variants.
*
* For a given source node in the graph, the algorithm finds the shortest path
* between that node and every other. It can also be used for finding the shortest
* paths from a single node to a single destination node by stopping the algorithm
* once the shortest path to the destination node has been determined.
*
* The algorithm is widely used in network routing protocols and finding the shortest
* route between cities on road networks, for example.
*
* Let's step through how the algorithm works...
*
* We have a positively weighted directional graph with 4 nodes. We are starting
* at node A and want the fastest route to node D. The weights represent minutes
* to node.
*
*    (6)   A   (2)            A -> B: 6 mins
*        ↙  ↘                 A -> C: 2 mins
*       B  ←  C   (3)         C -> B: 3 mins
*        ↘   ↙                B -> D: 1 mins
*    (1)   D   (5)            C -> D: 5 mins
*
* Step 1: Find the cheapest node.
*
* If we start at node A, should we go to node B or C? Well, if we take B it will
* cost us 6 minutes but if we take C it will cost us 2 minutes. Therefore, C is
* the cheapest node. The rest of the nodes we don't know yet. You might have guessed
* by now that Dijkstra's is actually a greedy algorithm because we are always
* looking for the cheapest node.
*
* We can represent this easily in a running cost table, like below. The cost of
* a node is how long it takes to get to that node from the start. We know it takes
* 6 minutes to get to node B (although we may find a path that takes less time).
*
* We don't know how long it will take to reach node D yet (our finish), we mark
* it as Infinity. That is, all nodes for which we don't have a tentative cost for
* yet, we mark as Infinity.
*
* Node | Time
* -------------
*   B  |  6
*   C  |  2
*   D  |  ∞
*
* What's the best way to calculate the cheapest node? Well, we can use a priority
* queue, which we'll implement using our heap class. Then we can simply extract
* the cheapest node from the front of the queue. We can think of all nodes in the
* queue as 'unseen' or un-processed. That is, nodes we are yet to explore.
*
* Step 2: Update the costs of the neighbors of the cheapest node we picked.
*
* Calculate how long it takes to get to all of node C's neighbors by following an
* edge from C. If we follow C -> B, we find a shorter path to node B than what we
* used to have. Previously, our route to B was 6 minutes, now it's 5 minutes if
* we go A -> C -> B. So we'll update B's cost to 5 minutes.
*
* We also found a shorter time to D, our destination node. Following the neighbors
* of C we can see that it takes 7 minutes to get to D. So we update this cost from
* Infinity too.
*
* With this system, we are tentatively calculating costs and updating them as we
* find cheaper paths to those nodes. We mark the current value in () below.
*
* Node | Time
* -------------
*   B  |  6, (5)
*   C  |  2
*   D  |  ∞, (7)
*
* Step 3: Repeat!
*
* We find the node that takes the least amount of time to get to again. We're done
* with node C, so node B has the next smallest time estimate. We update the costs
* for B's neighbours and we can see that B -> D is 1 minutes. So we can update
* our cost to D to 6 minutes!
*
* Node | Time
* -------------
*   B  |  6, (5)
*   C  |  2
*   D  |  ∞, 7, (6)
*
* Step 4: Return the final costs of all nodes from the source node.
*
* In common presentations of Dijkstra's algorithm, initially all nodes are entered
* into the priority queue. This is, however, not necessary: the algorithm can start
* with a priority queue that contains only one item, and insert new items as they
* are discovered. This maintains a smaller priority queue in practice, speeding
* up the queue operations.
*
* This first function is the 'single source' variety of the algorithm, which is the
* original version. It takes a graph and a source node and returns the shortest
* path from the source node to every other node. One note, the original version
* did not actuall use a minHeap data structure, which we do. This helps us squeeze
* some performance out of the algorithm as we get O(log n) extractions from the heap.
*
* singleSource()
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

import Heap from '../../../data_structures/heap/heap';

function singleSource(source, graph) {
  const minHeap = new Heap((a, b) => b.cost - a.cost);  // minHeap with custom cost comparison
  const costs = new Map();                              // stores least cost from root to every node
  const parents = new Map();                            // stores parent of every node in least cost
  const seen = new Set();
  const results = [];

  costs.set(source, 0); // set source cost
  minHeap.add({         // push source onto heap
    node: source,
    cost: 0,
  });

  // set all unknown costs and parents
  graph.nodes.forEach((n) => {
    if (n !== source) {
      costs.set(n, Infinity);
      parents.set(n, null);
    }
  });

  // main loop, empty our heap
  while (!minHeap.isEmpty()) {
    const { node } = minHeap.extract();
    seen.add(node);

    node.edges.forEach((e) => {
      const altCost = costs.get(node) + e.cost;
      const edgeNode = e.endNode;

      if (altCost < costs.get(edgeNode)) {
        costs.set(edgeNode, altCost);
        parents.set(edgeNode, node);

        if (!seen.has(edgeNode)) {
          minHeap.add({
            node: edgeNode,
            cost: altCost,
          });
        }
      }
    });
  }

  // tidy our results up
  costs.forEach((cost, key) => {
    results.push({
      node: key.value,
      cost,
    });
  });

  return results;
}

/*
* uniformCostSearch()
*
* Uniform Cost Search (UCF) is a variant of Dijkstra's original algorithm. UCF is
* Dijkstra's Algorithm which is focused on finding a single shortest path from a
* 'start' node to an 'goal' node.
*
* Step 4: Calculate our final path
*
* Once we hit our finish node, we know that we can build our shortest path to
* return.
*
* Our final path will be A -> C -> B -> D
*                          2    3    1 = 6 minutes in total.
*
* We'll return an object with a path array, holding the node values, and we'll
* attach a 'totalCost' property too.
*/

// function uniformCostSearch(start, goal) {
//   const minHeap = new Heap((a, b) => b.cost - a.cost);
//   const seen = new Map();
//
//   minHeap.add({
//     node: start,
//     cost: 0,
//   });
//
//   while (!minHeap.isEmpty()) {
//     const { node } = minHeap.extract();
//
//     if (node === goal) {
//       return 'Found!'
//       // return solution
//     }
//
//     seen.set(node);
//     node.edges.forEach((e) => {
//       const endNode = e.endNode;
//       const heapedNode = minHeap.getCollection().filter((n) => n.node === endNode);
//
//       if (!seen.has(endNode) || heapedNode.length > 0) {
//         minHeap.add({
//           node: endNode,
//           cost: e.cost,
//         });
//       } else if (heapedNode.cost > e.cost) {
//         node = endNode;
//       }
//     });
//   }
//
//   return new Error('Path does not exist.');
// }

// function uniformCostSearch(start, goal) {}
//
// export { uniformCostSearch, singleSource };

export default singleSource;
