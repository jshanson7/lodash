import isInteger from './isInteger';

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a safe integer. An integer is safe if it's an IEEE-754
 * double precision number which isn't the result of rounding result of unsafe
 * integers.
 *
 * **Note:** This method is based on [`Number.isSafeInteger`](http://ecma-international.org/ecma-262/6.0/#sec-number.issafeinteger).
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a safe integer, else `false`.
 * @example
 *
 * _.isSafeInteger(3);
 * // => true
 *
 * _.isSafeInteger(Number.MAX_VALUE);
 * // => false
 *
 * _.isSafeInteger(3.14);
 * // => false
 *
 * _.isSafeInteger(Infinity);
 * // => false
 */
function isSafeInteger(value) {
  return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
}

export default isSafeInteger;