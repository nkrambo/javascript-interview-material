
(function() {

  'use strict';

  const size = (state) => ({
    size: () => state.items.length
  })

  const peek = (state) => ({
    peek: () => state.items[state.items - 1]
  })

  const push = (state) => ({
    push: (item) => {
      state.items.append(item)
    }
  })

  const pop = (state) => ({
    pop: () => state.items.pop()
  })

  const isEmpty = (state) => ({
    isEmpty: () => state.items == []
  })

  const stack = () => {
    let state = {
      items: []
    }

    return Object.assign(
      {},
      size(state),
      peek(state),
      push(state),
      pop(state),
      isEmpty(state)
    )
  }

})()
