const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
	arr = n.toString().split("")
	const variants = []

	for (i in arr) {
		const current = [...arr]
		current.splice(i, 1)
		variants.push(+current.join(""))
	}

	return Math.max(...variants)
}

module.exports = {
  deleteDigit
};
