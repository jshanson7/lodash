import baseMerge from './baseMerge';
import isObject from '../lang/isObject';

/**
 * Used by `_.defaultsDeep` to customize its `_.merge` use.
 *
 * @private
 * @param {*} objValue The destination object property value.
 * @param {*} srcValue The source object property value.
 * @returns {*} Returns the value to assign to the destination object.
 */
function mergeDefaults(objValue, srcValue, key, object, source, stackA, stackB) {
  if (isObject(objValue)) {
    stackA.push(objValue);
    stackB.push(objValue);
    baseMerge(objValue, srcValue, mergeDefaults, stackA, stackB);
  }
  return objValue === undefined ? srcValue : objValue;
}

export default mergeDefaults;