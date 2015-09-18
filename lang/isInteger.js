import toInteger from './toInteger';

/**
 * Checks if `value` is an integer.
 *
 * **Note:** This method is based on [`Number.isInteger`](http://ecma-international.org/ecma-262/6.0/#sec-number.isinteger).
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an integer, else `false`.
 * @example
 *
 * _.isInteger(3);
 * // => true
 *
 * _.isInteger(Number.MAX_VALUE);
 * // => true
 *
 * _.isInteger(3.14);
 * // => false
 *
 * _.isInteger(Infinity);
 * // => false
 */
function isInteger(value) {
  return typeof value == 'number' && value == toInteger(value);
}

export default isInteger;