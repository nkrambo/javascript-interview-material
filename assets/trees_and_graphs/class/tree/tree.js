
/**
* Tree
*
* Trees are much like graphs or linked lists except they are "unidirectional".
* All this means is that they can't have loops of references.
*
*        Tree:                Not a Tree:
*
*          A                        A
*        ↙   ↘                    ↗   ↘
*      B       C                B ←–––– C
*
* If you can draw a loop between connected nodes in a tree... well, you don't
* have a tree.
*
* Trees have many different uses, they can be used to optimize searching or
* sorting. They can organize programs better. They can give you a
* representation that is easier to work with.
*
* This is one of the most basic trees you could have and is probably only
* useful if the data you are representing actually resembles a tree.
*
* But with some extra rules a tree can serve a lot of different purposes.
*
*     Tree {
*       root: {
*         value: 1,
*         children: [{
*           value: 2,
*           children: [...]
*         }, {
*           value: 3,
*           children: [...]
*         }]
*       }
*     }
*
*
*            ccee88oo             \ | /
*          C8O8O8Q8PoOb o8oo    '-.;;;.-,   ooooO8O8QOb o8bDbo
*        dOB69QO8PdUOpugoO9bD  -==;;;;;==-aadOB69QO8PdUOpugoO9bD
*       CgggbU8OU qOp qOdoUOdcb .-';;;'-.  CgggOU ddqOp qOdoUOdcb
*           6OuU  /p u gcoUodpP   / | \ jgs  ooSec cdac pdadfoof
*             \\\//  /douUP         '         \\\d\\\dp/pddoo
*               \\\////                         \\ \\////
*                |||/\                           \\///
*                |||\/                           ||||
*                |||||                          /|||
*  .............//||||\.......................//|||\\.....................
*/

class Tree {
  constructor() {
    this.root = null;
  }

  traverse(callback) {

    // We'll define a walk function that we can call recursively on every node
    // in the tree.
    function walk(node) {

      // First call the callback on the node.
      callback(node);

      // Then recursively call the walk function on all of its children.
      node.children.forEach(walk);
    }

    // Now kick the traversal process off.
    walk(this.root);
  }

  insert(value, parentValue) {
    const node = {
      value: value,
      children: []
    };

    // If there is no root, set node.
    if (this.root === null) {
      this.root = node;
      return;
    }

    // Otherwise traverse the entire tree and find a node with a matching value
    // and add the new node to its children.
    this.traverse((node) => {
      if (node.value === parentValue) {
        node.children.push(node);
      }
    });
  }
}

export default Tree;
