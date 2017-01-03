
/**
* In-Flight Entertainment
*
* Tags: Map, Classic
*
* You've built an in-flight entertainment system with on-demand movie streaming.
*
* Users on longer flights like to start a second movie right when their first one
* ends, but they complain that the plane usually lands before they can see the ending.
* So you're building a feature for choosing two movies whose total runtimes will
* equal the exact flight length.
*
* Write a function that takes an integer flightLength (in minutes) and an array
* of integers movieLengths (in minutes) and returns a boolean indicating whether
* there are two numbers in movieLengths whose sum equals flightLength.
*
* When building your function:
*
* - Assume your users will watch exactly two movies
* - Don't make your users watch the same movie twice
* - Optimize for runtime over memory
*/

/**
* twoMovies()
*
* Solution:
*
* This is a re-wording of the classic two sum problem.
*
* A naieve approach to this problem would be to loop over movieLengths and treat
* every iteration as the first movie, and for each of those check if any other
* second movie is equal to flightLength - first movie length.
*
* This would require nested loops, meaning a O(n^2) time. We can do better.
*
* A more efficient approach would be to use a Set(). We could store all our movie
* lengths into a set in O(n) time, and this will give us convenient constant-time
* lookups.
*
* We make one pass through movieLengths, treating each item as the 'first' movie length.
* At each iteration, we:
*
* 1. See if there's a 'second' we've seen already (stored in our 'moviesSeen' set)
*    that is equal to flightLength - first. If there is, we short-circuit and return true.
*
* 2. Keep our moviesSeen set up to date by throwing in the current 'first'.
*
* We know users won't watch the same movie twice because we check moviesSeen for
* 'second' before we've put 'first' in it!
*
* Time: O(n)
* Space: O(n)
* Where n is the length of movieLengths
*
* @param {number} flightLength duration of flight in minutes
* @param {array} movieLengths array of movie lengths, each in minutes
* @return {boolean} returns true if 2 movies fit within the flight duration, else false
*/

function twoMovies(movieLengths, flightLength) {

  // movie lengths we've seen so far
  const moviesSeen = new Set();

  for (let movie of movieLengths) {
    const first = movie;
    const second = flightLength - first;

    if (moviesSeen.has(second)) {
      return true;
    }

    moviesSeen.add(first);
  }

  // we never found a match, so return false
  return false;
}

export default twoMovies;
