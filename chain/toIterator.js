/**
 * Enables the wrapper to be iterable.
 *
 * @name next
 * @memberOf _
 * @category Chain
 * @returns {Object} Returns the wrapper object.
 * @example
 *
 * var wrapped = _([1, 2]);
 *
 * wrapped[Symbol.iterator]() === wrapped;
 * // => true
 *
 * Array.from(wrapped);
 * // => [1, 2]
 */
function wrapperToIterator() {
  return this;
}

export default wrapperToIterator;