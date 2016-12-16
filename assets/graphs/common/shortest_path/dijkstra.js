
/**
* Dijkstra's Algorithm
*
* Dijkstra's algorithm is an algorithm for finding the shortest paths between nodes
* in directed graphs with unbounded non-negative weights. The algorithm exists in
* many variants, but the min-priority queue (with a fibonnaci heap) implementation
* is the fastest known. However, specialized cases (such as bounded/integer weights,
* directed acyclic graphs etc.) can indeed be improved further as detailed specialized
* variants.
*
* For a given source node in the graph, the algorithm finds the shortest path
* between that node and every other. It can also be used for finding the shortest
* paths from a single node to a single destination node by stopping the algorithm
* once the shortest path to the destination node has been determined.
*
* The algorithm is widely used in network routing protocols and finding the shortest
* route between cities on road networks, for example.
*
* Dijkstra's algorithm is used for finding the shortest paths between two nodes
* in a weighted directed graph where all weights are positive values. The graph
* might also have cycles.
*
* Time: O(1)
* Space: O(1)
*/

function dijkstra() {

}

export default dijkstra;
