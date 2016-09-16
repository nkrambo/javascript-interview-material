
// Remove Dups
// @param {object} list - Instance of LinkedList class, unsorted list
// @return {object} Returns the same modified list with duplicate values removed

function removeDuplicates(list) {

  // type check
  if (!(list instanceof LinkedList)) {
    throw new Error('removeDuplicates: Expects single parameter of class "LinkedList"');
  }

  // if only 1 item, there cannot be duplicates
  if (list.length <= 1) return list;

  // traverse list grabbing value and
  // then check every other value and call remove on duplicates

}