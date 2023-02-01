/**
 * Whe we assigns the value of "a" variable to "b" variable, the "b" variable
 * has a "copy" of the original value for primitive values
 * like numbers, strings, booleans, undefined and null.
 * So, for this cases, if we reassing one of the two variables,
 * the other remains the same.
 */

let aVariable = 42
let bVariable = aVariable // bVariable equals 42
bVariable = 0 // bVariable now equals 0, but aVariable stills 42

/**
 * Don't change next lines.
 */

module.exports = { aVariable, bVariable }