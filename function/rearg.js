import baseFlatten from '../internal/baseFlatten';
import createWrapper from '../internal/createWrapper';
import restParam from './restParam';

/** Used to compose bitmasks for wrapper metadata. */
var REARG_FLAG = 256;

/**
 * Creates a function that invokes `func` with arguments arranged according
 * to the specified indexes where the argument value at the first index is
 * provided as the first argument, the argument value at the second index is
 * provided as the second argument, and so on.
 *
 * @static
 * @memberOf _
 * @category Function
 * @param {Function} func The function to rearrange arguments for.
 * @param {...(number|number[])} indexes The arranged argument indexes,
 *  specified individually or in arrays.
 * @returns {Function} Returns the new function.
 * @example
 *
 * var rearged = _.rearg(function(a, b, c) {
 *   return [a, b, c];
 * }, 2, 0, 1);
 *
 * rearged('b', 'c', 'a')
 * // => ['a', 'b', 'c']
 */
var rearg = restParam(function(func, indexes) {
  return createWrapper(func, REARG_FLAG, undefined, undefined, undefined, baseFlatten(indexes));
});

export default rearg;