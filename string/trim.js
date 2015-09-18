import baseToString from '../internal/baseToString';
import charsLeftIndex from '../internal/charsLeftIndex';
import charsRightIndex from '../internal/charsRightIndex';
import stringToArray from '../internal/stringToArray';
import trimmedLeftIndex from '../internal/trimmedLeftIndex';
import trimmedRightIndex from '../internal/trimmedRightIndex';

/**
 * Removes leading and trailing whitespace or specified characters from `string`.
 *
 * @static
 * @memberOf _
 * @category String
 * @param {string} [string=''] The string to trim.
 * @param {string} [chars=whitespace] The characters to trim.
 * @param- {Object} [guard] Enables use as an iteratee for functions like `_.map`.
 * @returns {string} Returns the trimmed string.
 * @example
 *
 * _.trim('  abc  ');
 * // => 'abc'
 *
 * _.trim('-_-abc-_-', '_-');
 * // => 'abc'
 *
 * _.map(['  foo  ', '  bar  '], _.trim);
 * // => ['foo', 'bar']
 */
function trim(string, chars, guard) {
  string = baseToString(string);
  if (!string) {
    return string;
  }
  if (guard || chars === undefined) {
    return string.slice(trimmedLeftIndex(string), trimmedRightIndex(string) + 1);
  }
  chars = (chars + '');
  if (!chars) {
    return string;
  }
  var strSymbols = stringToArray(string),
      chrSymbols = stringToArray(chars);

  return strSymbols.slice(charsLeftIndex(strSymbols, chrSymbols), charsRightIndex(strSymbols, chrSymbols) + 1).join('');
}

export default trim;