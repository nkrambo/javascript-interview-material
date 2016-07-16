
(function() {

  'use strict';

  // O(1)
  const addFront = (state) => ({
    addFront: (item) => {
      state.items.push(item);
    }
  })

  // O(n)
  const addRear = (state) => {
    addRear: (item) => {
      state.items.unshift(item);
    }
  }

  // O(n)
  const removeRear = (state) => ({
    removeRear: () => state.items.shift()
  })

  // O(1)
  const removeFront = (state) => ({
    removeFront: () => state.items.pop()
  })

  const size = (state) => ({
    size: () => state.items.length
  })

  const isEmpty = (state) => ({
    isEmpty: () => state.items == []
  })

  const deque = () => {
    let state = {
      items: []
    }

    return Object.assign(
      {},
      addFront(state),
      addRear(state),
      removeFront(state),
      removeRear(state),
      size(state),
      isEmpty(state)
    )
  }

})()
