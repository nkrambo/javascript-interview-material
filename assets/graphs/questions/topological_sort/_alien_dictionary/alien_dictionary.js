
/**
* Alien Dictionary
*
* Tags: Topological Sort, Graph Traversal, Lexicographical Order
* Leetcode: 269
*
* There is a new alien language which uses the latin alphabet. However, the order
* among letters are unknown to you. You receive a list of words from the dictionary,
* where words are sorted lexicographically by the rules of this new language.
* Derive the order of letters in this language.
*
* For example, given the following words in dictionary:
*
* [
*   'wrt',
*   'wrf',
*   'er',
*   'ett',
*   'rftt'
* ]
*
* The correct order is: 'wertf'.
*
* Notes:
*
* 1. You may assume all letters are in lowercase.
* 2. If the order is invalid, return an empty string.
* 3. There may be multiple valid order of letters, return any one of them is fine.
*
* Solution:
*
* In essence, this is a topological sort problem and quite complicated at that.
* To tackle it, there are several steps we need to take. Let's break it down, step
* by step.
*
* In graph theory, the degree of a vertex (or node) is the number of edges incident
* to that vertex, with loops counted twice. In the below example, we can see that
* we have a graph of 6 nodes. 1 node is orphaned and has no edges, or a degree of
* 0. The other nodes have varying degrees, with one having a cycle (or loop) that
* we count twice.
*
*                 1 ---- 3 ------ 3
*                        |        |
*                        |        |
*                0       |        |
*                        2 ------ 4 --
*                                 |   | (loop)
*                                  ---
*
* Our first step, like all topological sorting problems is to build a graph to
* work with. We import our 'Graph' class for this.
*
* We need a node to represent each unique character within our 'words' array.
* That is, we need a single (a) node to represent all the a's within all the words.
* This is simple. We iterate our words array and then each character of that word
* and if we haven't already placed that character into the graph, we add it.
*
* Our node objects look like this...
*
*   {
*     edges: [],
*     value: "w"
*   }
*
* Using our example above, after this process we will have a graph with a total of
* 5 nodes, with no edges in place yet.
*
*     (t)     (f)     (e)
*         (r)     (w)
*
* Our next step will be to add the 'inDegree' property to all of our nodes. This
* property isn't included from our Graph class natively but we need this to
* complete our topological sort later. We'll iterate our nodes, add and set it to 0.
*
* Simple. Now we have this...
*
*   {
*     edges: [],
*     inDegree: 0
*     value: "w"
*   }
*
* Now, we need to figure out the lexicographical ordering of our node values and
* represent this in our graph.
*
* We know that by comparing the adjacent words in our array, the first character
* that is different between them reflects the lexicographical order.
*
* For example:
*
* ['wrt', 'wrf']
* The first different character is the 3rd letter, so 't' comes before 'f'.
*
* ['wrf', 'er']
* The first different character is 1st letter, so 'w' comes before 'e'.
*
* To achieve this we must iterate over the words array again and grab each 'current'
* word and the 'next' (adjacent) word. Then we can further compare each character (c1, c2)
* at the same index (j) within words by iterating the minimum length of the shortest
* of the two, we don't process non-compareable values.
*
* If we come across two characters of different values at the same index then we
* process them. So, like we said earlier, if c1 and c2 are different then c1 must
* come before c2 in lexicographical order. To represent this in our graph, we place
* an edge from c1 to c2, but only if we haven't already. We also bump up c2's
* inDegree property by 1.
*
* This process will give us our final graph with all unique nodes, edges representing
* the lexicographical ordering of these nodes and an 'inDegree' property to help
* us sort them.
*
* The final graph in our example looks like this...
*
*     w → e → r → t → f
*
* Phew... That's quite a bit of work but now we're setup for the final piece to
* this problem. We need to run a topological sort on our graph and build a results
* string to return.
*
* There are a couple of approaches to this. You could do a DFS, but we're using
* Karn's aglorithm to do the topological sort. This is an iterative BFS which
* makes use of a queue.
*
* In essence, we look for any nodes that have a 0 inDegree and use them as
* 'starting nodes' and push them onto our queue. There must be at least one such
* node in a non-empty acyclic graph. These starting nodes come first lexicographically.
* In our above example, this would only include the 'w' node, all other nodes have
* an inDegree of 1.
*
* We shift() from our queue and process the node.
*
* Once we've done that, it's irrelevant that some nodes are dependent on 'w' as
* it's already sorted. We can reflect this new state by removing outgoing edges
* of 'w', including decrementing it's assocaited degree.
*
* Again, in our above example, this would be 'e' since 'w' had an edge to it.
* Now, we can use the same logic as before and check to see if any nodes have a
* 0 inDegree to push onto the queue for processing. In above, we could now push
* 'e'.
*
* Kahn's is a pretty straight forward algorithm. This is a simple example but it's
* very powerful with complex directed acyclic graphs.
*
* Time: O(n)
* Space: O(n)
*
* @param {array} words array of strings
* @return {string} returns a string representing the order of the words
*/

// import Graph from '../../../data_structures/graph/graph';
//
// function alienOrder(words) {
//   let result = '';
//
//   // build graph
//   // each node represents a unique character for all words
//   // e.g node (a) represents all occurences of a's
//   const graph = new Graph();
//   words.forEach((word) => {
//     for (const char of word) {
//       if (!graph.find(char)) {
//         graph.insert(char);
//       }
//     }
//   });
//
//   // add inDegree property to nodes
//   // our graph class doesn't support this property natively
//   graph.nodes.forEach((node) => {
//     node.inDegree = 0;
//   });
//
//   // grab adjacent words, that is, 'current' and 'next'
//   for (let i = 0; i < words.length - 1; i += 1) {
//     const current = words[i];
//     const next = words[i + 1];
//     const length = Math.min(current.length, next.length);
//
//     // iterate adjacent words and compare characters at index j
//     for (let j = 0; j < length; j += 1) {
//       const c1 = current[j];
//       const c2 = next[j];
//
//       // if they are different, c1 must come before c2 lexicographically
//       // add edge to represent this and update node in-degree for topological sorting
//       if (c1 !== c2) {
//         // check if we've already added this edge
//         let seen = false;
//         graph.find(c1).edges.forEach((edge) => {
//           if (edge.value === c2) seen = true;
//         });
//
//         // if we haven't, add it
//         if (!seen) {
//           // edge
//           graph.insertEdge(c1, c2);
//
//           // degree
//           graph.find(c2).inDegree += 1;
//         }
//       }
//     }
//   }
//
//   // BFS (Karn's aglorithm) to find lexicographical order
//   const queue = [];
//
//   // grab starting nodes that have a 0 in-degree, they come first lexicographically
//   graph.nodes.forEach((node) => {
//     if (node.inDegree === 0) queue.push(node);
//   });
//
//   while (queue.length) {
//     // dequeue
//     const node = queue.shift();
//
//     // concat onto result string
//     result += node.value;
//
//     // remove outgoing edges
//     node.edges.forEach((edge) => {
//       edge.inDegree -= 1;
//
//       // if this edge now has a 0 in-degree, queue it
//       if (edge.inDegree === 0) queue.push(edge);
//     });
//   }
//
//   // check for cycle, not a DAG
//   graph.nodes.forEach((node) => {
//     if (node.inDegree !== 0) {
//       throw new Error('Build Error: Cannot build with cyclic dependencies.');
//     }
//   });
//
//   return result;
// }
//
// export default alienOrder;
