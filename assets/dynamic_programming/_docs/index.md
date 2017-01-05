
## Dynamic Programming

Dynamic programming is a method for solving complex problems by first solving simpler overlapping subproblems building up to solve the larger problem. Ideally, we use a memory-based data structure to store solutions to already solved subproblems as to not repeat work, we call this "memoization".

Dynamic programming algorithms are often used for **optimization**. That is, they combine their solutions to give the **best solution** for the given problem. In addition to finding optimal solutions to some problem, dynamic programming can also be used for counting the **number of solutions**, for example counting the number of ways a certain amount of change can be made from a given collection of coins.

In comparison, [greedy algorithms](/assets/greedy/_docs/index.md) do not guarantee an optimal, 'best' solution. Instead, they pick the locally optimal choice in a sequence of steps for a fast overall solution, but not necessarily the 'best'. Greedy algorithms give us much **fast 'close to optimal' solutions** to NP-Complete problems, like the traveling salesman problem, which have no known optimal solution. Some greedy algorithms, however, are proven to lead to the optimal solution, such as Prim's for minimum spanning trees.

It's also important to note that a problem must have **overlapping sub-problems** to be applicable for solving through dynamic programming. Problems that can be solved by combining optimal solutions to **non-overlapping sub-problems**, use a strategy called ["divide and conquer"](/assets/sort_and_searching/_docs/index.md) instead, such as merge sort and binary search.

### Overlapping Subproblems

Overlapping sub-problems means that the space of sub-problems must be small, that is, any recursive algorithm solving the problem should solve the same sub-problems over and over, rather than generating new sub-problems.

As an example, let's look at the fibonacci sequence (the series where each number is the sum of the two previous ones, 0, 1, 1, 2, 3, 5, 8...).

If we wanted to compute the nth fibonacci number, we could use this simple recursive algorithm:

```javascript
function fib(n) {
  if (n === 0 || n === 1) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}
```

We'd call fib(n - 1) and fib(n - 2) **subproblems** of fib(n).

Now let's look at what happens when we call fib(5):

<p align="center">
<img src="images/fib.png" width="625" />
</p>

Our function ends up recursively calling fib(2) **three times**. So the problem of finding the nth fibonacci number has overlapping subproblems.

Even though the total number of sub-problems is actually small, we end up solving the same problems over and over if we adopt a naive recursive solution such as this. In our above example, you can see recursive functions marked in yellow have already been solved. Dynamic programming takes account of this fact and solves each sub-problem only once.



### Dynamic Programming Problems

<table>
  <!-- header -->
  <tr>
    <th>Question</th>
    <th>Difficulty</th>
    <th>Tags</th>
    <th>References</th>
    <th>Tested</th>
  </tr>

  <!-- entries -->
  <tr>
    <td><a href="../questions/wiggle_sequence/wiggle_sequence.js">Wiggle Sequence</a></td>
    <td>Medium</td>
    <td></td>
    <td>LeetCode #376</td>
    <td>:thumbsup:</td>
  </tr>

  <tr>
    <td><a href="../questions/making_change/making_change.js">Making Change</a></td>
    <td>Medium</td>
    <td></td>
    <td>LeetCode #322</td>
    <td>:thumbsup:</td>
  </tr>

  <tr>
    <td><a href="../questions/house_robber/house_robber.js">House Robber</a></td>
    <td>Easy</td>
    <td></td>
    <td>LeetCode #198</td>
    <td>:thumbsup:</td>
  </tr>

  <tr>
    <td><a href="../questions/cake_thief/cake_thief.js">Cake Thief</a></td>
    <td>Medium</td>
    <td>Bottom Up, Unbounded Knapsack, Classic</td>
    <td></td>
    <td>:thumbsup:</td>
  </tr>

</table>