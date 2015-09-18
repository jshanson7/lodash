import assignMergeValue from './assignMergeValue';
import baseClone from './baseClone';
import copyArray from './copyArray';
import isArguments from '../lang/isArguments';
import isArray from '../lang/isArray';
import isArrayLike from '../lang/isArrayLike';
import isFunction from '../lang/isFunction';
import isObject from '../lang/isObject';
import isPlainObject from '../lang/isPlainObject';
import isTypedArray from '../lang/isTypedArray';
import toPlainObject from '../lang/toPlainObject';

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Array} [stackA=[]] Tracks traversed source objects.
 * @param {Array} [stackB=[]] Associates values with source counterparts.
 */
function baseMergeDeep(object, source, key, mergeFunc, customizer, stackA, stackB) {
  var length = stackA.length,
      oldValue = object[key],
      srcValue = source[key];

  while (length--) {
    var stacked = stackA[length];
    if (stacked == srcValue || stacked == oldValue) {
      assignMergeValue(object, key, stackB[length]);
      return;
    }
  }
  var newValue = customizer ? customizer(oldValue, srcValue, (key + ''), object, source, stackA, stackB) : undefined,
      isCommon = newValue === undefined;

  if (isCommon) {
    newValue = srcValue;
    if (isArray(srcValue) || isTypedArray(srcValue)) {
      newValue = isArray(oldValue)
        ? oldValue
        : ((isObject(oldValue) && isArrayLike(oldValue)) ? copyArray(oldValue) : baseClone(srcValue));
    }
    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = isArguments(oldValue)
        ? toPlainObject(oldValue)
        : (isObject(oldValue) ? oldValue : baseClone(srcValue));
    }
    else {
      isCommon = isFunction(srcValue);
    }
  }
  // Add the source value to the stack of traversed objects and associate
  // it with its merged value.
  stackA.push(srcValue);
  stackB.push(newValue);

  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    mergeFunc(newValue, srcValue, customizer, stackA, stackB);
  }
  assignMergeValue(object, key, newValue);
}

export default baseMergeDeep;