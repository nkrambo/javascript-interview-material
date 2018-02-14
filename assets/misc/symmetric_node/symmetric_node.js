
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
*
*
*/

// This function returns a real array of Nodes, so we can use methonds like "indexOf".
// childnodes is a "collection".
function getChildren(node) {
  return Array.from(node.childNodes);
}

// This function returns an array of indices from given node to the root
function getPath(root, node) {
  const path = [];
  let curElement = node;

  // This is important as if a node is null or doesn't have a parent
  // there is no need of searching further
  while (curElement !== root && curElement && curElement.parentNode) {
    const index = getChildren(curElement.parentNode).indexOf(curElement);
    path.push(index);
    curElement = curElement.parentNode;
  }

  return path;
}

// Popping all values from the array of indices we go to the symmetrical node
function getNodeByPath(root, originalPath) {
  const path = [].concat(originalPath);
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

const root1 = document.getElementById('root1');
const root2 = document.getElementById('root2');
const node1 = document.getElementById('node1');
const node2 = document.getElementById('node2');

const nodeX = getSymmetricNode(root1, root2, node1);

console.log(nodeX === node2); // true

// https://stackoverflow.com/questions/19779438/dom-tree-traversal

// https://javascript.info/dom-navigation

// https://www.gitbook.com/book/timurcatakli/technical-interview-preparation-v2/details
