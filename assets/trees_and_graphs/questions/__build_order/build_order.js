
/**
* Build Order
*
* Types: Topological Sort
*
* You are given a list of projects and a list of dependencies (which is a
* list of pairs of projects, where the first project is dependent on the second
* project). All of a project's dependencies must be built before the project is.
* Find a build order that will allow the projects to be built. If there is no valid
* build order, return an error.
*
* Example:
* Input: [a, b, c, d, e, f], [[d, a], [b, f], [d, b], [a, f], [c, d]]
* Output: [f, e, a, b, d, c]
*/

/**
* Build Order
*
* Solution:
*
* Visualising the problem as a directed graph is the best approach.
* So we can start by building a graph where each node represets a project with
* it's outgoing edges representing the projects that depend on it. That is, if A
* has an edge to B (A -> B), it means B has a dependency on A and A must be built
* before B.
*
* The we use a topological soring helper to recursively process every node and
* update the build order.
*
* We keep track of nodes we've visited so we don't repeat ourselves. We also track
* of paths and check for cyclic dependencies.
*
* Time - O(P + D)
* Space: O(1)
*
* Where P is the number of projects and D is the number of dependencies.
*
* @param {array} projects - Array of projects
* @param {array} deps - A matrix of project dependencies
* @return {array} Returns a new array with the project build order, or an error if no valid order exists.
*/

function buildOrder(projects, deps) {
  const build = [];
  const visited = new Set();
  const path = new Set();

  // create graph of projects with edges representing deps
  const graph = {};
  projects.forEach((project) => {
    graph[project] = [];
  });

  deps.forEach((edge) => {
   graph[edge[1]].push(edge[0]);
  });

  // run topological sort helper
  projects.forEach((project) => {
    topologicalSort(project, graph, visited, path, build);
  });

  return build.reverse();
}

function topologicalSort(project, graph, visited, path, build) {
  if (visited.has(project)) return;
  visited.add(project);
  path.add(project);

  for (let adjacent of graph[project]) {
    if (path.has(adjacent)) throw new Error('dependencies are cyclic');
    topologicalSort(adjacent, graph, visited, path, build);
  }

  path.delete(project);
  build.push(project);
}

export default buildOrder;
