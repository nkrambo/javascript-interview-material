
(function() {

  "use strict"

  /**
  *  Return frame from top of stack and remove it
  *  @return {*} - Can return any type or empty
  */
  const popFrame = (state) => ({
    popFrame: () => {
      if (state.size === 0) {
        return state.message.empty
      } else {
        const deletedFrame = state.storage[state.size]
        delete state.storage[state.size]
        state.size--
        return deletedFrame + "\n" + state.message.success
      }
    }
  })

  /**
  *  Return the current top frame but does not remove it
  *  @return {*} - Can return any type or empty
  */
  const peek = (state) => ({
    peek: () => state.size === 0 ? state.message.empty : state.storage[state.size] + "\n" + state.message.success
  })

  /**
  *  Return the current number of frames
  *  @return {integer}
  */
  const size = (state) => ({
    size: () => state.size === 0 ? state.message.empty : state.size + "\n" + state.message.success
  })

  /**
  *  Add a frame
  *  @param {*} data - Whatever you want but never null.
  */
  const addFrame = (state) => ({
    addFrame: (data) => {
      state.size++
      state.storage[state.size] = data
      return state.message.success
    }
  })

  /**
  *  Show all frames
  *  @return {object} or empty
  */
  const showFrames = (state) => ({
    showFrames: () => state.size === 0 ? state.message.empty : state.storage
  })

  /**
  *  Stack factory - compose stack from factory functions
  *  @return {object}
  */
  const stack = () => {

    // setup state
    let state = {
      size: 0,
      storage: {},
      message: {
        fail: "Failure: Sorry something went wrong.",
        empty: "Your stack is empty!",
        success: "Success: Action completed."
      }
    }

    // compose return object
    return Object.assign(
      {},
      addFrame(state),
      showFrames(state),
      popFrame(state),
      peek(state),
      size(state)
    )
  }


  const myStack = stack()

  myStack.addFrame("My string")
  myStack.addFrame(true)
  myStack.addFrame(false)
  myStack.addFrame(345)

  // console.log(myStack.popFrame())
  console.log(myStack.size())
  console.log(myStack.peek())
  console.log(myStack.showFrames());

}())
