/**
 * Assignment operators set values to variables or constants.
 * Many of the assignment operators applies a transformation to the
 * existent data of a variable.
 * 
 * let thisValue = 2 // thisValue === 2
 * thisValue += 3 // now thisValue === 5
 * thisValue *= 7 // now thisValue === 35
 * thisValue -= 5 // now thisValue === 30
 * thisValue /= 2 // now thisValue === 15
 * thisValue %= 4 // now thisValue === 3
 * thisValue **= 2 // now thisValue === 9
 * 
 * Exercise:
 * - Set in myResultGuess the result of the operations
 */

let myResultGuess
let changingValue = 30
changingValue += 20
changingValue -= 10
changingValue **= 2
changingValue /= 100
changingValue %= 5

/**
 * Don't to change next lines.
 */
module.exports = { myResultGuess, changingValue }