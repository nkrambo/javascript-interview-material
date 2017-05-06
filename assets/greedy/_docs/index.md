
## Greedy

An algorithm is said to be greedy if it makes the locally optimal choice at each step with the hope of eventually reaching the globally optimal solution. In some cases, greedy works—the solution is short and runs efficiently. For many others, however, it does not.

A problem must exhibit these two properties in order for a greedy algorithm to work:

1. It has optimal sub-structures. Optimal solution to the problem contains optimal solutions to the sub-problems.

2. It has the greedy property. If we make a choice that seems like the best at the moment and proceed to solve the remaining subproblem, we reach the optimal solution. We will never have to reconsider our previous choices.

If the input size is 'small enough' to accommodate the time complexity of either Complete Search or Dynamic Programming approaches, then use these approaches as both will ensure a correct answer. Only use a Greedy algorithm if the input size given in the problem statement are too large even for the best Complete Search or DP algorithm.

Having said that, it is increasingly true that problem authors try to set the input bounds of problems that allow for Greedy strategies to be in an ambiguous range so that contestants cannot use the input size to quickly determine the required algorithm!

We have to remark that it is quite challenging to come up with new 'non-classical' Greedy problems. Therefore, the number of such novel Greedy problems used in technical interviews is lower than that of Complete Search or Dynamic Programming problems. For this reason it may be helpful to memorize classical 'greedy' problems.

There are a few classical examples of Greedy algorithms:

1. Kruskal's (and Prim's) algorithm for the Minimum Spanning Tree (MST) problem
2. Dijkstra's algorithm for the Single-Source Shortest Paths (SSSP) problem
3. Interval Covering
4. Load Balancing
5. Sort the Input First
6. Knapsack Problem
7. Classroom Scheduling Problem

### Sort the Input First

An important problem solving strategy usually applicable to greedy problems: Sorting the input data to elucidate hidden greedy strategies.


