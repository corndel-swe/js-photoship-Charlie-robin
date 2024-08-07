// https://tech-docs.corndel.com/js/array-slice.html

/**
 * Returns the middle elements of the array, without the first and last
 * elements.
 *
 * e.g. [4, 6, 1, 7, 9] => [6, 1, 7]
 *
 * @param {Array} arr - The array to process
 * @returns {Array} The array containing only the middle elements
 */
export function getMiddle(arr) {
  return arr.slice(1, arr.length - 1);
}
