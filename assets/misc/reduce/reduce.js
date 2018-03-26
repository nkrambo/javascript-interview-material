
/**
* Serialise Props
*
* Serialise IDs from a nested tree of items
*
* Should return [1, 2, 3, 9, 4, 7, 10, 11, 5, 6, 12, 8]
*
* const data = [
*   { id: 1,
*     items: [
*       { id: 4,
*         items: [
*           { id: 5 },
*           { id: 6,
*             items: [
*               { id: 8 }
*             ]
*           }
*         ]
*       }
*     ]
*   },
*   { id: 2,
*     items: [
*       { id: 7}
*     ]
*   },
*   { id: 3 },
*   { id: 9,
*     items: [
*       { id: 10,
*         items: [
*           { id: 12 }
*         ]
*       },
*       { id: 11 }
*     ]
*   }
* ];
*/

/**
* Using a queue
*/

function serialiseIds(data) {
  const queue = data.slice();
  const response = [];

  while (queue.length) {
    const item = queue.shift();
    const { id, items } = item;
    response.push(id);
    if (!items) {
      continue;
    }
    items.forEach((subItem) =>
      queue.push(subItem));
  }

  return response;
}

/**
* Using recursion
*
* If you wanted to make the following more flexible you could also pass in the
* prop that you want to extract
*/

function serialiseRecurse(data) {
  const results = [];
  return helper(data, results);
}

function helper(data, results) {
  data.forEach((item) => {
    results.push(item.id);

    if (item.items) {
      helper(item.items, results);
    }
  });

  return results;
}

// var myFunc = function myFunc(test) {
//   if (test) {
//     var a = 5;
//   }
//
//   console.log(a);
// }
//
// myFunc(true);

const fido = new Dog('Fido');
fido.bark();

function Dog(name) {
  this.name = name;

  return {
    bark() {
      console.log(`${name} says woof!`);
    },
  };
}


// you have an array of shifts with starting and ending times
// return array of how many ppl work at different times

// [[3, 7], [5, 7], [7, 15], [7, 12], [8, 15], [10, 15], [12, 20]]

// should return:
// [[3, 1], [5, 2], [7, 2], [8, 3], [10, 4], [12, 4]

// so to brute force this one, we would step through each shift,
// at each shift we would always + 1 for the current starting time
// then we would check for any other same starting times ahead and if there
// is the same start time, then we add 1. That is, 2 people starting at
// the same time.

// Then, we would check all previous shifts to see if anytimes are less
// than or equal to the current starting time, substract for every occurence
// that means that someones shift has ended, so we account for that
// this will give us our current count at time


const test = [[3, 7], [5, 7], [7, 15], [7, 12], [8, 15], [10, 15], [12, 20]];

// // brute
// function peopleWorking(arr) {
//   const results = [];
//   let count = 0;


//   for (let i = 0; i < arr.length; i += 1) {
//     const [start, end] = arr[i];
//     count += 1;

//     for (let j = 0; j < arr.length; j += 1) {
//       // skip same index
//       if (j === i) continue;

//       // check before ending times are equal or less, subtract 1
//       if (j < i && start >= arr[j][1]) count -= 1;

//       // check ahead starting times are same, add 1
//       // skip ahead i index
//       if (j > i && start === arr[j][0]) {
//         count += 1;
// //         i = j;
//       }
//     }

//     results.push([start, count]);
//   }

//   return results;
// }


// optimal solution

// we basically extract and sort the end times, forming a stack
// the start times should already be sorted

// then we iterate over start times
// - if start time is less than ends.peek(), plus 1 to count, push
// - if start time is equal to do not increment count, but push instance of start time, same count
// this should derive the solution for us


function peopleWorking(arr) {
  const results = [];
  const starts = [];
  const ends = [];

  // break times O(n)
  arr.forEach((shift) => {
    starts.push(shift[0]);
    ends.push(shift[1]);
  });

  // sort, we use this as a stack
  ends.sort((a, b) => a - b);

  let count = 0;
  for (let i = 0; i < starts.length; i += 1) {
    if (starts[i] < ends[0]) { // peek
      count += 1;
      results.push([starts[i], count]);
    } else if (starts[i] === ends[0]) {
      if (results[results.length - 1] === [starts[i], count]) continue;
      results.push([starts[i], count]);
      ends.shift(); // pop
    }
  }

  return results;
}

// [[3, 1], [5, 2], [7, 2], [8, 3], [10, 4], [12, 4]

console.log(peopleWorking(test));
