var camelCase = require('camel-case')
var upperCaseFirst = require('upper-case-first')

/**
 * Pascal case a string.
 *
 * @param  {string}  value
 * @param  {string}  [locale]
 * @param  {boolean} [mergeNumbers]
 * @return {string}
 */
var pascalCase = function (value, locale, mergeNumbers) {
  return upperCaseFirst(camelCase(value, locale, mergeNumbers), locale)
}

module.exports = pascalCase;
module.exports.pascalCase = pascalCase;
