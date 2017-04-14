
/**
* Merge Meeting Times
*
* Types: Greedy, Sorting
*
* Your company built an in-house calendar tool called HiCal. You want to add a
* feature to see the times in a day when everyone is available.
*
* To do this, you'll need to know when any team is having a meeting. In HiCal, a
* meeting is stored as objects with attributes startTime and endTime. These integers
* represent the number of 30 minute blocks past 9:00am.
*
* For example:
* {startTime: 2, endTime: 3} // meeting from 10:00 – 10:30 am
* {startTime: 6, endTime: 9} // meeting from 12:00 – 1:30 pm
*
* Write a function condenseMeetingTimes() that takes an array of meeting time
* ranges and returns an array of condensed ranges.
*
* For example, given:
* [
*   {startTime: 0,  endTime: 1},
*   {startTime: 3,  endTime: 5},
*   {startTime: 4,  endTime: 8},
*   {startTime: 10, endTime: 12},
*   {startTime: 9,  endTime: 10},
* ]
*
* Your function would return:
* [
*   {startTime: 0, endTime: 1},
*   {startTime: 3, endTime: 8},
*   {startTime: 9, endTime: 12},
* ]
*
* Do not assume the meetings are in order. The meeting times are coming from
* multiple teams.
*
* Write a solution that's efficient even when we can't put a nice upper bound on
* the numbers representing our time ranges. Here we've simplified our times down
* to the number of 30 minute slots past 9:00 am. But we want the function to work
* even for very large numbers, like Unix timestamps. In any case, the spirit of
* the challenge is to merge meetings where startTime and endTime don't have an
* upper bound.
*
* Things to consider...
*
* Look at this case:
* [{startTime: 1, endTime: 2}, {startTime: 2, endTime: 3}]
*
* These meetings should probably be merged, although they don't exactly 'overlap',
* they just 'touch'. Does your function do this?
*
* Look at this case:
* [{startTime: 1, endTime: 5}, {startTime: 2, endTime: 3}]
*
* Notice that although the second meeting starts later, it ends before the first
* meeting ends. Does your function correctly handle the case where a later meeting
* is 'subsumed by' an earlier meeting?
*
* Look at this case:
* [
*   {startTime: 1, endTime: 10},
*   {startTime: 2, endTime: 6},
*   {startTime: 3, endTime: 5},
*   {startTime: 7, endTime: 9},
* ]
*
* Here all of our meetings should be merged together into just {startTime: 1, endTime: 10}.
* We need to keep in mind that after we've merged the first two we're not done with
* the result. The result of that merge may itself need to be merged into other
* meetings as well.
*
* Make sure that your function won't 'leave out' the last meeting.
*
* We can do this in O(n log n) time.
*/

/**
* mergeTimes()
*
* Solution:
*
* Taking a brute force approach, to see if a given meeting can be merged, we have
* to look at all the other meetings! That's because the order of the meetings is random.
* Trying to solve this in one pass will cost us O(n^2).
*
* So to do better, first we sort our input array of meetings by start time so any
* meetings that might need to be merged are now next to each other.
*
* Then we walk through our sorted meetings from left to right. At each step, either:
*
* 1. We can merge the current meeting with the previous one, so we do.
* 2. We can't merge the current meeting with the previous one, so we know the
*    previous meeting can't be merged with any future meetings and we throw the
*    current meeting into mergedMeetings.
*
* This one arguably uses a greedy approach, except we had to sort the array first.
*
* Time: O(n log n)
* Space: O(n)
*
* Even though we only walk through our array of meetings once to merge them, we
* sort all the meetings first, giving us a runtime of O(n log n). It's worth noting
* that if our input were sorted, we could skip the sort and do this in O(n) time!
*
* We create a new array of merged meeting times. In the worst case, none of the
* meetings overlap, giving us an array identical to the input array.
* Thus we have a worst-case space cost of O(n).
*
* @param {array} meetings
* @return {array} returns an array of merged meetings
*/

function mergeTimes(meetings) {
  // sort by start times
  const sorted = meetings.slice().sort((a, b) => {
    return a.startTime > b.startTime ? 1 : -1;
  });

  // initialize merged with the earliest meeting
  const merged = [sorted[0]];

  for (let i = 1; i < sorted.length; i += 1) {
    const current = sorted[i];
    const lastMerged = merged[merged.length - 1];

    // if the current and last meetings overlap, use the latest end time
    if (current.startTime <= lastMerged.endTime) {
      lastMerged.endTime = Math.max(lastMerged.endTime, current.endTime);

    // add the current meeting since it doesn't overlap
    } else {
      merged.push(current);
    }
  }

  return merged;
}

export default mergeTimes;
