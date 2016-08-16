
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */


(function() {

  "use strict"

  /**
  *  Add node to the end of the list
  *  @param {*} - Can be any type or but never null
  */
  const pushNode = (state) => ({
    pushNode: (value) => {
      let node
      let currentNode = state.head

      if (value !== undefined) {

        node = {
          value: value,
          next: null
        }

        if (!state.head) {
          state.head = node
        } else {
          while (currentNode.next) {
            currentNode = currentNode.next
          }
          currentNode.next = node;
        }

        state.size++

      } else {
        throw new Error("You need to pass in some data.")
      }

    }
  })

  /**
  *  Return last node on the list
  *  @return {*} - Can be any type or empty
  */
  const popNode = (state) => ({
    popNode: () => {

    }
  })

  /**
  *  Return node at search position
  *  @param {integer} - position
  *  @return {*} - Can be any type or empty
  */
  const searchNodeAt = (state) => ({
    searchNodeAt: (position) => {

    }
  })

  // show list
  const show = (state) => ({
    show: () => {
      return {
        size: state.size,
        head : state.head
      }
    }
  })

  // Singly list factory
  const singlyList = () => {

    let state = {
      size: 0,
      head: null
    }

    return Object.assign(
      {},
      pushNode(state),
      popNode(state),
      searchNodeAt(state),
      show(state)
    )
  }

  const myList = singlyList()

  myList.pushNode("One")
  myList.pushNode("Two")
  myList.pushNode("Three")
  myList.pushNode("Four")

  console.log(myList.show())


}())
