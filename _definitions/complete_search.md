
##Complete Search (a.k.a Brute Force)

The Complete Search technique, also known as 'brute force' or recursive backtracking, is a method for solving a problem by traversing the entire (or part of the) search space to obtain the required solution. During the search, we are allowed to prune (that is, choose not to explore) parts of the search space if we have determined that these parts have no possibility of containing the required solution.

Often, Complete Search should be the first solution considered as it is usually easy to come up with such a solution and to code/debug it. Remember the 'KISS' principle: Keep It Short and Simple.\

You should be able to solve all problems with a bug free brute force approach as a minimum. However, most programming problems do have better-than-Complete-Search solutions. Therefore, only develop a Complete Search solution when there is clearly no other better algorithm available.

Sometimes, running Complete Search on small instances of a challenging problem can help us to understand its structure through patterns in the output (it is possible to visualize the pattern for some problems) that can be exploited to design a faster algorithm.

You may have the impression that Complete Search only works for 'easy problems' and it is usually not the intended solution for 'harder problems'. This is not entirely true. There exist hard problems that are only solvable with creative Complete Search algorithms.

###Iterative Approaches

Problems that are solvable with a single loop are usually considered easy. Problems which require double nested iterations are more challenging but they are not necessarily considered difficult. You must be comfortable writing code with more than two nested loops.

```javascript
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr.length; i += 1) {
      
    }
  }
```