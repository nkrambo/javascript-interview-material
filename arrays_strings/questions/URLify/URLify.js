
// URLify
// @param {string} string The string to modify
// @return {string} Modified string with '' replaced with %20's

function URLify(string) {

  // type check
  if (typeof string !== 'string') return false;

  // replace '' with %20
  return string.split(' ').join('%20');
}
