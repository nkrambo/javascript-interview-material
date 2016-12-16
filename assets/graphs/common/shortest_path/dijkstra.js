
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
* now not the fastest. Our fastest route now is A -> F -> D -> E -> H -> C, which
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
* fibonnaci heap) implementation is the fastest known. However, specialized cases
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
*       B  →  C   (3)         B -> C: 3 mins
*        ↘   ↙                B -> D: 5 mins
*    (5)   D   (1)            C -> D: 1 mins
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
* 
*
* Step 3: Repeat Step 1 and 2 for every node is the graph.
*
* Step 4: Calculate the final path.
*
* Time: O(1)
* Space: O(1)
*
* @param {object} graph
* @param {object} source node to start with
* @return {void}
*/

function dijkstra(graph, source) {

}

export default dijkstra;
