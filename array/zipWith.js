import restParam from '../function/restParam';
import unzipWith from './unzipWith';

/**
 * This method is like `_.zip` except that it accepts `iteratee` to specify
 * how grouped values should be combined. The iteratee is invoked with four
 * arguments: (accumulator, value, index, group).
 *
 * @static
 * @memberOf _
 * @category Array
 * @param {...Array} [arrays] The arrays to process.
 * @param {Function} [iteratee=_.identity] The function to combine grouped values.
 * @returns {Array} Returns the new array of grouped elements.
 * @example
 *
 * _.zipWith([1, 2], [10, 20], [100, 200], _.add);
 * // => [111, 222]
 */
var zipWith = restParam(function(arrays) {
  var length = arrays.length,
      iteratee = length > 1 ? arrays[length - 1] : undefined;

  iteratee = typeof iteratee == 'function' ? (arrays.length--, iteratee) : undefined;
  return unzipWith(arrays, iteratee);
});

export default zipWith;