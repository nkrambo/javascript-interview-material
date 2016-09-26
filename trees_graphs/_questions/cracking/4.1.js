
/**
 * Route Between Nodes
 *
 * Given a directed graph, design an algorithm to find out whether there is
 * a route between two nodes.
 *
 * Solution: This can be solved with a simple graph traversal, such as DFS or BFS.
 * We start with one of the nodes and, during traversal, check if the other node
 * is found. We keep track of alread visited nodes with a set to avoid cycles.
 */

 /**
  * Route between nodes
  *
  * @param {class} graph Directed graph class to check for routes
  * @param {object} start Node to start at
  * @param {object} end Node to end at
  * @return {boolean} Returns true if a route exists, otherwise returns false
  */

 function routeBetweenNodes(graph, start, end) {
   const visited = new Set();
   const queue = [start];

   while (queue.length) {
     const node = queue.shift();
     for (let neighbour of graph[node]) {
       if (!visited.has(neighbour)) {
         if (neighbour === end) {
           return true;
         }

         visited.add(neighbour);
         queue.push(neighbour);
       }
     }
   }

   return false;
 }

 export default routeBetweenNodes;
