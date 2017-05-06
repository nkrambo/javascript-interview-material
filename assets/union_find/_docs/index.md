
## Union Find

A union–find data structure, also known as a disjoint-set or a merge–find set, is a data structure that keeps track of a set of elements partitioned into a number of disjoint (non-overlapping) subsets. It supports two useful operations:

- **Find:** Determine which subset a particular element is in. Find typically returns an item from this set that serves as its "representative"; by comparing the result of two Find operations, one can determine whether two elements are in the same subset.

- **Union:** Join two subsets into a single subset.

The other important operation, **MakeSet**, which makes a set containing only a given element (a singleton), is generally trivial.

MakeSet creates 8 singletons.

<p align="center">
<img src="images/makeset.png" width="440" />
</p>

After some operations of Union, some sets are grouped together.

<p align="center">
<img src="images/union.png" width="440" />
</p>

In order to define these operations more precisely, some way of representing the sets is needed. One common approach is to select a fixed element of each set, called its **representative**, to represent the set as a whole. Then, Find(x) returns the representative of the set that x belongs to, and Union takes two set representatives as its arguments.



Runtime and space complexity

Space: O(n) - average and worst
Find: O(a(n)) - average and worst
Union: O(a(n)) - average and worst



system design
mongo
sql
jquery
