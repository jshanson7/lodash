import arrayMap from '../internal/arrayMap';
import baseIteratee from '../internal/baseIteratee';
import baseMap from '../internal/baseMap';
import isArray from '../lang/isArray';

/**
 * Creates an array of values by running each element in `collection` through
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
 *
 * The guarded methods are:
 * `ary`, `callback`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
 * `fill`, `invert`, `parseInt`, `random`, `range`, `sample`, `slice`, `some`,
 * `sortBy`, `take`, `takeRight`, `template`, `trim`, `trimLeft`, `trimRight`,
 * `uniq`, and `words`
 *
 * @static
 * @memberOf _
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function|Object|string} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function timesThree(n) {
 *   return n * 3;
 * }
 *
 * _.map([1, 2], timesThree);
 * // => [3, 6]
 *
 * _.map({ 'a': 1, 'b': 2 }, timesThree);
 * // => [3, 6] (iteration order is not guaranteed)
 *
 * var users = [
 *   { 'user': 'barney' },
 *   { 'user': 'fred' }
 * ];
 *
 * // using the `_.property` callback shorthand
 * _.map(users, 'user');
 * // => ['barney', 'fred']
 */
function map(collection, iteratee) {
  var func = isArray(collection) ? arrayMap : baseMap;
  return func(collection, baseIteratee(iteratee, 3));
}

export default map;