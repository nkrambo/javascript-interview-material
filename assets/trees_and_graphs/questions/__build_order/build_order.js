
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
* Time: O(P + D)
* Space: O(P)
*
* Where P is the number of projects and D is the number of dependencies.
*
* @param {array} projects - Array of projects
* @param {array} deps - A matrix of project dependencies
* @return {array} Returns a new array with the project build order, or an error if no valid order exists.
*/

import Graph from '../../class/graph/graph';

function buildOrder(projects, deps) {
  const build = [];

  // create graph of projects with edges representing deps
  const graph = new Graph();

  // nodes (projects)
  projects.forEach((project) => {
    graph.insert(project);
  });

  // edges (deps)
  deps.forEach((dep) => {
    graph.insertEdge(dep[0], dep[1]);
  });

  // topological sort (Kahn's algorithm)
  const queue = [];

  // grab starting projects (nodes) that have no deps (0 degree)
  graph.nodes.forEach((project) => {
    if (project.edges.length === 0) {
      queue.push(project);
    }
  });

  // process projects
  while (queue.length) {

    // dequeue
    const project = queue.shift();

    // add to build order
    build.push(project);

  }

  return build;
}

export default buildOrder;
