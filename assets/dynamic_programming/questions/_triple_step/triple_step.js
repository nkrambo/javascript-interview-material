
/**
* Triple Step
*
* Types: Dynamic Programming
*
* A child is running up a staircase with n steps and can hop either 1, 2, or 3
* steps at a time. Implement a method to count how many possible ways the child
* can run up the stairs.
*
* Solution:
*
* Let's think about this with the following question: What was the very last step
* that is done?
*
* The very last hop the child makes, the one that lands him on the nth step, was
* either a 3-step hop, a 2-step hop, or a 1-step hop.
*
* How many ways then are there to get up to the nth step? We don't know yet, but
* we can relate it to some subproblems.
*
* If we thought about all the paths to the nth step, we could just build them off
* the paths to the three previous steps. We can get up to the nth step by any of
* the following:
*
* - Going to the (n - 1)st step and hopping 1 step.
* - Going to the (n - 2)nd step and hopping 2 steps.
* - Going to the (n - 3)rd step and hopping 3 steps.
*
* Therefore, we just need to add the number of these paths together.
*
* Be careful here. A lot of people want to multiply them. Multiplying one path with
* another would signify taking one path and then taking the other. That's not what's
* happening here.
*
* If you haven't noticed yet, this is similiar to a Fibonacci sequence. Let's draw
* a grid out to illustrate how we solve this.
*
* We can take: 1-step, 2-step, 3-step
*
* +-------+------------------------------------------------+
* | step  |  0     1     2     3     4     5     6     7   |
* +--------------------------------------------------------+
* | ways  |  0     1     2     4     7     13    24    44  |
* +--------------------------------------------------------+
*
* Remember that in a bottom-up grid, each cell represents its own solution to a
* sub-problem. So, for step 0. How many ways can we step to that with our allowed
* steps, well 0 obviously.
*
* For step 1, we can take a 1-step only so we mark that down.
*
* For step 2, we can take a 2-step or 2 (1-steps). So there's 2 ways we can get there.
*
* For step 3, we can take a 3-step, 3 (1-steps), a 1-step and 2-step, a 2-step and
* 1-step. So, there are 4 ways we can get to step 3.
*
* Now that we have solutions to these we can easily calculate n as n = (n-1) + (n-2) + (n-3).
*
* Time: O(1)
* Space: O(1)
*
* @param {number} steps number of steps in staircase
* @return {number} returns the number of ways a child can go up the stairs
*/

// function tripleStep(steps) {
//   const ways = [0, 1, 2, 4];
//
//   for (let i = 4; i < steps; i += 1) {
//     ways[i] = ways[i-1] + ways[i-2] + ways[i-3];
//   }
//
//   return ways[steps];
// }
//
// export default tripleStep;
