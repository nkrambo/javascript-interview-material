
/**
* Dijkstra's Algorithm
*
* With a BFS you can determine the shortest route between nodes A and C, 3 edges
* in this case. A -> B -> G -> C
*
*    (A) –––→ (B) –––→ (G)
*     ↑                   ↘
*     F –→ D –→ E –→ H –→ (C)
*
* But what if those edges have travel times associated with them. That is,
* each edge is weighted. Now the least amount of edges may not be the 'fastest'
* route between two nodes. This is where Dijkstra's algorithm comes in.
*
* With weighted edges we can see that our previous route (3 edges, weight 14) is
* now not the fastest. Our fastest route now is F -> D -> E -> H -> C, which is a
* total of 4 edges but a weight of 5, almost 3 times faster.
*
*           8           6
*     A ––––––––→ B ––––––––→ G
*     ↑                         ↘
*    (F) –→ (D) –→ (E) –→ (H) –→ (C)
*        1      1      2      1
*
* Dijkstra's is used therefore for finding the shortest paths between nodes
* in directed graphs with unbounded non-negative weights. Note, that the weights
* must be positive, if you're dealing with positive and negative weigths there's
* an algorithm for that too, Bellman-Ford's algorithm.
*
*  Dijkstra's algorithm exists in many variants, but the min-priority queue (with a
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
* Time: O(1)
* Space: O(1)
*/

function dijkstra() {

}

export default dijkstra;
