
// Palindrome
// We know that the list must be the same forwards as it is backwards.

// using the runner technique
function isPalindrome(list) {

  // type check
  if (!(list instanceof LinkedList)) {
    new Error('isPalindrome: Expects a single parameter of [object LinkedList].');
  }

  let slow = list.head;
  let fast = list.head;

  const stack = [];

  // push elements from first half into the stack. If we know the length of the list
  // we could just use a for loop instead of the runner.
  while (fast !== null && fast.next !== null) {
    stack.push(slow.value);
    slow = slow.next;
    fast = fast.next.next;
  }

  // has odd number of elements
  if (fast !== null) {
    slow = slow.next;
  }

  while (slow !== null) {
    const top = stack.pop();

    // if values are different then it's not a palindrome
    if (top !== slow.value) return false;
    slow = slow.next;
  }

  return true;
}

export default isPalindrome;
