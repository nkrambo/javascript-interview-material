
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
* DFS
*
* An alternative algorithm for topological sorting is based on depth-first search.
*
*/
