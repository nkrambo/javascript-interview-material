
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
* Time: O(1)
* Space: O(1)
*
* @param {number} steps number of steps in staircase
* @return {number} returns the number of ways a child can go up the stairs
*/

function tripleStep(steps) {
  // base cases
  if (steps <= 0) return 0;
  if (steps == 1) return 1;
  if (steps == 2) return 2;

  let one_step_before = 2;
  let two_steps_before = 1;
  let all_ways = 0;

  for (let i = 2; i < n; i += 1) {
    all_ways = one_step_before + two_steps_before;
    two_steps_before = one_step_before;
    one_step_before = all_ways;
  }

  return all_ways;
}

export default tripleStep;
