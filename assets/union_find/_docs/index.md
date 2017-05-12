
## Union Find

A union–find data structure, also known as a disjoint-set or a merge–find set, is a data structure that keeps track of a set of elements partitioned into a number of disjoint (non-overlapping) subsets.

It can be used to keep track of the connected components of an undirected graph, for example. Or, to determine whether two vertices belong to the same component, or whether adding an edge between them would result in a cycle. It is also used for implementing Kruskal's algorithm to find the minimum spanning tree of a graph.

Some other applications are:

- Friends in a social network
- Pixels in a digital photo
- Computers in a network
- Transistors in a computer chip

https://medium.com/towards-data-science/course-2-data-structure-part-2-priority-queues-and-disjoint-set-ed11a0383011

**Complexity**

- Space: O(n)
- Find: O(a(n))
- Union: O(a(n))

### Operations

Union Find typically supports three operations:

- **Find:** Determine which subset a particular element is in. Find typically returns an item from this set that serves as its "representative"; by comparing the result of two Find operations, one can determine whether two elements are in the same subset.

- **Union:** Join two subsets into a single subset.

- **MakeSet:** Makes a set containing only a given element (a singleton).

MakeSet creates 8 singletons.

<p align="left">
<img src="images/makeset.png" width="440" />
</p>

After some operations of Union, some sets are grouped together.

<p align="left">
<img src="images/union.png" width="440" />
</p>

### Representative Nodes

In order to define these operations more precisely, some way of representing the sets is needed. One common approach is to select a fixed element of each set, called its **representative**, to represent the set as a whole. Then, `Find(x)` returns the representative of the set that x belongs to, and Union takes two set representatives as its arguments.

There are two common ways to implement a Union Find data structure.

**Linked Lists**

A simple Union Find data structure can use linked lists for each set. The element at the head of each list is chosen as its representative.

`MakeSet()` creates a list of one element. Union appends the two lists, a constant-time operation if the list carries a pointer to its tail. The drawback of this implementation is that Find requires O(n) or linear time to traverse the list backwards from a given element to the head of the list.

This can be avoided by including in each linked list node a pointer to the head of the list; then Find takes constant time, since this pointer refers directly to the set representative. However, Union now has to update each element of the list being appended to make it point to the head of the new combined list, requiring O(n) time.

Generally speaking, using linked lists is considered a naive approach.

**Forests**

Disjoint-set forests are data structures where each set is represented by a tree data structure, in which each node holds a reference to its parent node

In a disjoint-set forest, the representative of each set is the root of that set's tree. Find follows parent nodes until it reaches the root. Union combines two trees into one by attaching the root of one to the root of the other.

Although we are using a tree structure, we can represent our nodes in an array, much like we do with a binary heap.

A Union Find data structure maintains a collection of S1, S2, ..., Sn of disjointed dynamic sets. Each set we represent as a rooted tree.

<!-- We can store these sets(rooted trees) by using an array where A[i] is the parent of node i or node i if it is the root. -->

**Union by Rank**

A union by rank using forests, always attaches the smaller tree to the root of the larger tree. Since it is the depth of the tree that affects the running time, the tree with smaller depth gets added under the root of the deeper tree, which only increases the depth if the depths were equal.

In the context of this algorithm, the term rank is used instead of depth since it stops being equal to the depth if path compression (described below) is also used. One-element trees are defined to have a rank of zero, and whenever two trees of the same rank r are united, the rank of the result is r + 1.

Just applying this technique alone yields a worst-case running-time of O(log n) for the Union or Find operation.

**Path Compression**

Path compression, is a way of flattening the structure of the tree whenever `Find()` is used on it. The idea is that each node visited on the way to a root node may as well be attached directly to the root node; they all share the same representative. To effect this, as `Find()` recursively traverses up the tree, it changes each node's parent reference to point to the root that it found. The resulting tree is much flatter, speeding up future operations not only on these elements but on those referencing them, directly or indirectly.

https://www.youtube.com/watch?v=ID00PMy0-vE

