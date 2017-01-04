
/**
* Build Order
*
* Tags: Topological Sort, Kahn's Algorithm
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
* Now, we should calculate the in-degree of each node. That is, how many edges are
* incoming or, in other words, how many projects it depends on. Pretty simple.
*
* Now with all this setup out of the way we can step through a regular Kahn's
* algorithm to calculate the topological sort.
*
* Kahn's algorithm is a BFS, which uses a queue to process nodes that have a 0
* in-degree (no deps).
*
* So as a first step we look for nodes with 0 deps and add them to the queue to
* to be processed. If there is no deps on the node we know we can build it.
* Once a node is built, we can now remove all of its outgoing edges beacuse they
* don't matter anymore. With those edges removed, we can now look again if anymore
* nodes now have 0 incoming edges. If they do we add them to the queue to repeat
* the process.
*
* Finally, once we have processed all nodes we check to see if any nodes still
* have remaining incoming edges. If any node has an in-degree greater than 0, we
* know that the graph cannot be a DAG. Therefore, it must have a cycle and cannot
* be built so we throw an error.
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

  // calculate in-degree for nodes
  graph.nodes.forEach((project) => {
    project.inDegree = 0;
  });

  graph.nodes.forEach((project) => {
    project.edges.forEach((edge) => {
      edge.inDegree += 1;
    });
  });

  // topological sort (Kahn's algorithm)
  const queue = [];

  // grab starting projects (nodes) that have no deps (0 in-degree)
  graph.nodes.forEach((project) => {
    if (project.inDegree === 0) queue.push(project);
  });

  // process projects
  while (queue.length) {

    // dequeue
    const current = queue.shift();

    // add to build order
    build.push(current.value);

    // remove outgoing edges
    current.edges.forEach((edge) => {
      edge.inDegree -= 1;

      // if this edge now has a 0 in-degree, queue it
      if (edge.inDegree === 0) queue.push(edge);
    });
  }

  // check for cycle, not a DAG
  graph.nodes.forEach((project) => {
    if (project.inDegree !== 0) {
      throw new Error('Build Error: Cannot build with cyclic dependencies.');
    }
  });

  return build;
}

export default buildOrder;
