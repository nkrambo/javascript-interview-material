
// Build Order

// You are given a list of projects and a list of dependencies (which is a
// list of pairs of projects, where the first project is dependent on the second project).
// All of a project's dependencies must be built before the project is. Find a build order that
// will allow the projects to be built. If there is no valid build order, return an error.

// @param {array} projects - Array of projects
// @param {array arrays} deps - A matrix of project dependencies
// @return {array} Returns a new array with the project build order, or an error if no valid order exists.

// Using a topological approach
// Page 623

function buildOrder(projects, dependencies) {
  const finished = [];
  const discovered = new Set();
  const path = new Set();

  // create graph
  const graph = {};
  projects.forEach((project) => {
    graph[project] = [];
  });

  // add in deps
  dependencies.forEach((edge) => {
   graph[edge[1]].push(edge[0]);
  });

  // run topological sort
  projects.forEach((project) => {
    topologicalSort(graph, discovered, finished, path, project);
  });

  return finished.reverse();
}

function topologicalSort(graph, discovered, finished, path, project) {
  if (discovered.has(project)) return;

  discovered.add(project);
  path.add(project);

  for (let neighbour of graph[project]) {
    if (path.has(neighbour)) throw new Error('dependencies are cyclic');
    topologicalSort(graph, discovered, finished, path, neighbour);
  }

  path.delete(project);
  finished.push(project);
}

const projects = ['a', 'b', 'f', 'd', 'g', 'e'];
const deps = [
  ['a', 'b'],
  ['f', 'b']
];

console.log(buildOrder(projects, deps));
