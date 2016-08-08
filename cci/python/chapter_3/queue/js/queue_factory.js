
(function() {

  'use strict';

  const enqueue = (state) => ({
    enqueue: (item) => {
      state.items.unshift(item);
    }
  })

  const dequeue = (state) => ({
    dequeue: () => state.items.pop()
  })

  const size = (state) => ({
    size: () => state.items.length
  })

  const isEmpty = (state) => ({
    isEmpty: () => state.items == []
  })

  const queue = () => {
    let state = {
      items: []
    }

    return Object.assign(
      {},
      enqueue(state),
      dequeue(state),
      size(state),
      isEmpty(state)
    )
  }

})()