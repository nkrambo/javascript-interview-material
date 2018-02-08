
function bind(oThis, ...theArgs) {
  if (typeof this !== 'function') {
    // closest thing possible to the ECMAScript 5
    // internal IsCallable function
    throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
  }

  const aArgs = Array.prototype.slice.call(theArgs, 1);
  const fToBind = this;
  const FNOP = () => {};
  const fBound = () => fToBind.apply(this instanceof FNOP ? this : oThis, aArgs.concat(Array.prototype.slice.call(theArgs)));

  if (this.prototype) {
    // Function.prototype doesn't have a prototype property
    FNOP.prototype = this.prototype;
  }

  fBound.prototype = new FNOP();

  return fBound;
}
