
/**
* Dijkstra's Algorithm
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
* Dijkstra's algorithm exists in many variants, but the min-priority queue (with a
* minimum heap) implementation is the fastest known. However, specialized cases
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
* the cheapest node. The rest of the nodes we don't know yet.
*
* Because we don't know how long it will take to reach node D yet, we mark it as
* Infinity.
*
* Node | Time
* -------------
*   B  |  6
*   C  |  2
*   D  |  ∞
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
* Node | Time
* -------------
*   B  |  5
*   C  |  2
*   D  |  7
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
*   B  |  5
*   C  |  2
*   D  |  6
*
* Step 4: Calculate the final path.
*
* Our final path will be A -> C -> B -> D
*                          2    3    1     = 6 minutes.
*
* Time: O(1)
* Space: O(1)
*
* @param {object} graph
* @param {object} start node
* @param {object} finish node
* @return {object} returns an object containing path array and total cost
*/

import Heap from '../../class/heap/heap';

function dijkstra(graph, start, finish) {
  const seen = new Set();
  const heap = new Heap();
  const previous = new Map();
  let path = [];
  let totalCost = 0;

  // Add the starting point to the heap, it will be the first node visited
  heap.set(start, 0);

  return {
    path,
    cost: totalCost,
  };
}

export default dijkstra;
