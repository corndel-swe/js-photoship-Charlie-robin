// Read https://tech-docs.corndel.com/js/arrays.html first!

/**
 * Returns the sum of the first and last elements of the array.
 *
 * e.g. [4, 1, 9, 5, 2] => 6
 *
 * @param {number[]} numbers - An array of numbers.
 * @returns {number} The sum of the first and last elements.
 */
export function firstAddLast(numbers) {
  if (numbers.length === 0) {
    return 0
  }

  return numbers[0] + numbers.at(-1)
}
