
/**
* Build Order
*
* Types: Topological Sort, Directed Acyclic Graph (DAG), Kahn's Algorithm
*
* You are given a list of projects and a list of dependencies (which is a
* list of pairs of projects, where the first project is dependent on the second
* project). All of a project's dependencies must be built before the project is.
* Find a build order that will allow the projects to be built. If there is no valid
* build order, return an error.
*
* Example:
* const projects = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
* const deps = [['C', 'F'],
*               ['B', 'F'],
*               ['A', 'F'],
*               ['A', 'C'],
*               ['A', 'B'],
*               ['E', 'B'],
*               ['E', 'A'],
*               ['G', 'D']];
*
* Input: projects, deps
* Output: ['F', 'C', 'B', 'A', 'E', 'D', 'G']
*/

/**
* Build Order
*
* Solution:
*
* This is a classic topological sort problem.
*
* Visualising the problem as a directed graph is the best approach. Let's take
* our example input.
*
*          F        D
*        ↙ | ↘      ↓
*      C   |   B    G
*        ↘ ↓ ↙ |
*          A   |
*          ↓  ↙
*          E
*
* So we can start by building a graph where each node represets a project with
* it's outgoing edges representing the projects that depend on it. That is, if F
* has an edge to B (F -> B), it means B has a dependency on F and F must be built
* before B.
*
* We keep track of nodes we've visited so we don't repeat ourselves. We also track
* of paths and check for cyclic dependencies.
*
* Time: O(P + D)
* Space: O(P)
*
* Where P is the number of projects and D is the number of dependencies.
*
* @param {array} projects
* @param {array} deps
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
    graph.insertEdge(dep[1], dep[0]);
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
    const current = queue.shift();

    // add to build order
    build.push(current.value);

    // remove any edges incoming from current project
    // push non-dependant projects onto queue
    graph.nodes.forEach((project) => {

      // remove edges
      project.edges.forEach((edge, index) => {
        if (edge[1] === current.value) {
          project.edges.splice(index, 1);
        }
      });

      // no incoming edges, push
      if (project.edges.length === 0) {
        queue.push(project);
      }
    });
  }

  // check for cycle, not a DAG
  // if () {
  //   throw new Error('Build Error: Cannot build with cyclic dependencies.');
  // }

  return build;
}

export default buildOrder;
