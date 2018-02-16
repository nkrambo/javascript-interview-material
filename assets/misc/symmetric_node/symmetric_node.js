
/**
* Symmetric Node
*
* Given 2 identical DOM trees (but not equal) and one element of the first DOM tree,
* how would you find this element in the second DOM tree?
*
* // DOM Tree 1
*
* <div id="root1">
*   <div>
*     <div></div>
*   </div>
*   <div>
*     <div id="node1"></div>
*     <div></div>
*   </div>
* </div>
*
* // DOM Tree 2
*
* <div id="root2">
*   <div>
*     <div></div>
*   </div>
*   <div>
*     <div id="node2"></div>
*     <div></div>
*   </div>
* </div>
*/


/**
* Solution 1
*
* The idea with this solution is to travel upward from our provided node to the
* root and create a path, an array of indices. Once we have this, we can then use
* this path to travel from root2 downward to find the symmetric node.
*
* We decompose this problem into 3 smaller functions to solve it.
*
* getPath - supplied node to root
* getNodeByPath - second tree root to symmetric node
* getChildren - helper that transforms childNodes collection to array
*/

// This function returns a real array of Nodes, so we can use methonds like "indexOf".
// childnodes is a "collection".
function getChildren(node) {
  return Array.from(node.childNodes);
}

// This function returns an array of indices from given node to the root
function getPath(root, node) {
  const path = [];
  let current = node;

  // This is important as if a node is null or doesn't have a parent
  // there is no need of searching further
  while (current !== root) {
    const index = getChildren(current.parentNode).indexOf(current);
    path.push(index);
    current = current.parentNode; // keep traversing upwards
  }

  return path;
}

// Popping all values from the array of indices we go to the symmetrical node
function getNodeByPath(root, originalPath) {
  const path = originalPath.slice();

  let element = root;
  while (path.length) {
    element = getChildren(element)[path.pop()];
  }

  return element;
}

// For convenience
function getSymmetricNode(root1, root2, node) {
  const path = getPath(root1, node);
  return getNodeByPath(root2, path);
}

/**
* Solution 2
*
* We can also achieve this using recursion.
*/

function findDomNodeInTree(rootA, rootB, targetNode) {
  // base case: found target
  if (rootA === targetNode) return rootB;

  let nodeB = null;
  for (let i = 0; i < rootA.childNodes.length && nodeB === null; i += 1) {
    nodeB = findDomNodeInTree(rootA.childNodes[i], rootB.childNodes[i], targetNode);
  }

  return nodeB;
}
