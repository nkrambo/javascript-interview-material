
/**
* BST Sequences
*
* A binary search tree was created by traversing through an array from left to
* right and inserting each element. Given a binary search tree with distinct elements,
* print all possible arrays that could have led to this array.
*
* Solution: We know that the root element must be the first element in all possible arrays.
* We call this a prefix. Once the root is inserted, all values less will go left and all
* values greater will go right. It actually doesn't matter what order the remaining values go in.
* Therefore we need to find all possible permutations of the remaining values other than the root
* and return those.
*
* We find all possible arrays if the left subtree and all possible arrays of the right subtree.
* Then we 'weave' all these arrays together, preprend the prefix, and push them as results.
*
*/

/**
* All Sequences
*
* @param {object} tree BST
* @return {array} Returns an array of arrays
*/

function allSequences(tree) {
  const root = tree.root;

  const leftSeqs = permutations(DFS(root.left));
  const rightSeqs = permutations(DFS(root.right));

  for (let left = 0; left < leftSeqs.length; left++) {
    for (let right = 0; right < rightSeqs.length; right++) {
      const results = weave(left, right);
    }
  }

  return results;
}

function DFS(root) {
  const results = [];
  const stack = [root];

  while (stack.length) {
    const node = stack.pop();
    results.push(node.value);

    if (node.left !== null) {
      stack.push(node.left);
    }

    if (node.right !== null) {
      stack.push(node.right);
    }
  }
  return results;
}

function permutations(array) {
  const results = [];

  function permute(arr, memo) {
    let current;
    let cache = memo || [];

    for (var i = 0; i < arr.length; i++) {
      current = arr.splice(i, 1);

      if (arr.length === 0) {
        results.push(cache.concat(current));
      }

      permute(arr.slice(), cache.concat(current));
      arr.splice(i, 0, current[0]);
    }

    return results;
  }
  return permute(array);
}

function weave() {

}

export default allSequences;
