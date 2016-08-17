
// Any function can create new objects.
// When it's not a constructor function, it's called a factory function.


const fullName = (state) => ({ // short-hand for returning an object
  fullName: () => {
    console.log(`${state.firstName} ${state.lastName}`);
  }
})

const Person = (firstName, lastName, age) => {

  let state = {
    firstName,
    lastName,
    age
  };

  return Object.assign(
    {},
    fullName(state)
  );
}

const nick = Person('Nick', 'Krambo', 32);

nick.fullName();

