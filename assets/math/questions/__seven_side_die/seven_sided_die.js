
/**
* rand7()
*
* @return {number} returns a random number between 1 - 7.
*/

function rand7() {

}

/**
* rand5()
*
* @return {number} returns a random number between 1 - 5.
*/

function rand5() {
  return Math.floor(Math.random() * (5 - 1 + 1)) + 1;
}

export {rand5, rand7};
