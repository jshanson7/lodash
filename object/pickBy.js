import baseIteratee from '../internal/baseIteratee';
import basePickBy from '../internal/basePickBy';

/**
 * Creates an object composed of the `object` properties `predicate` returns
 * truthy for. The predicate is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {Function|Object|string} [predicate=_.identity] The function invoked per iteration.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'user': 'fred', 'age': 40 };
 *
 * _.pickBy(object, _.isNumber);
 * // => { 'age': 40 }
 */
function pickBy(object, predicate) {
  return object == null ? {} : basePickBy(object, baseIteratee(predicate));
}

export default pickBy;