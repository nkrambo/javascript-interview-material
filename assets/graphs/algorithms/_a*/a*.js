
/**
* A*
*
*/

/**
* aStar
*
* @param {object} param description
* @return {object} returns an something
*/

function aStar() {
  // make an openlist containing only the starting node
  // make an empty closed list
  // while (the destination node has not been reached):
  //     consider the node with the lowest f score in the open list
  //     if (this node is our destination node) :
  //         we are finished
  //     if not:
  //         put the current node in the closed list and look at all of its neighbors
  //         for (each neighbor of the current node):
  //             if (neighbor has lower g value than current and is in the closed list) :
  //                 replace the neighbor with the new, lower, g value
  //                 current node is now the neighbor's parent
  //             else if (current g value is lower and this neighbor is in the open list ) :
  //                 replace the neighbor with the new, lower, g value
  //                 change the neighbor's parent to our current node
  //
  //             else if this neighbor is not in both lists:
  //                 add it to the open list and set its g
}

export default aStar;
