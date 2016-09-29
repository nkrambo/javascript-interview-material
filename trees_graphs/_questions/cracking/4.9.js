
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
  if (!tree || !tree.root) return null;

  return sequencesRecursive(tree.root);
}

function sequencesRecursive(node) {
  if (!node) return null;

  let perms = permutations(sequencesRecursive(node.left), sequencesRecursive(node.right));
  if (!perms) {
    perms = [[node.val]];
  } else {
    perms.forEach(p => p.unshift(node.val));
  }

  return perms;
}

function permutations(left, right) {
  if (!left || !right) {
    return left || right;
  }
  else {
    let perms = [];
    for (let i = 0; i < left.length; ++i) {
      for (let j = 0; j < right.length; ++j) {
        perms.push.apply(perms, permutationsRecursive([], left[i], right[j], [], 0, 0));
      }
    }
    return perms;
  }
}

function permutationsRecursive(perms, list1, list2, prefix, i, j) {
  if (i === list1.length && j === list2.length) {
    perms.push(prefix.slice(0));
  }
  else {
    if (i < list1.length) {
      prefix.push(list1[i]);
      permutationsRecursive(perms, list1, list2, prefix, i + 1, j);
      prefix.pop();
    }

    if (j < list2.length) {
      prefix.push(list2[j]);
      permutationsRecursive(perms, list1, list2, prefix, i, j + 1);
      prefix.pop();
    }
  }
  return perms;
}

export default allSequences;
