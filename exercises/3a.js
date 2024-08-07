// https://tech-docs.corndel.com/js/string-formatting.html

/**
 * Outputs a string saying "Hello, my name is NAME!" with
 * the name in uppercase.
 *
 * e.g. ("Abdi") => "Hello, my name is ABDI!"
 *
 * @param {string} name - The name
 * @returns {string} The greeting string with uppercase name interpolated
 */
export function nameTag(name) {
  return `Hello, my name is ${name.toUpperCase()}!`
}
