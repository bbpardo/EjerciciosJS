/**
 * 5 === 2 👉 false
 * 5 > 2 👉 true
 * 5 < 2 👉 false
 * 5 > 5 👉 false
 * 5 < 5 👉 false
 * 5 >= 5 👉 true
 * 5 <= 5 👉 true
 * 💀 5 == "5" 👉 true 💀
 * 💀 1 == true 👉 true 💀
 * 5 === "5" 👉 false // strict equality comparison
 * 1 === true 👉 false // strict equality comparison
 * 99 !== "99" 👉 true // strict not equal
 * 
 * Exercise:
 * - Replace the ❓ with the comparison operator who provides a true for each expression.
 * - May be multiple comparison operators provides a true.
 */

let greater = 10 ❓ 1
let equal = 33 ❓ 33
let minor = 5 ❓ 99
let notEqual = "1" ❓ 1

/**
 * Don't to change next lines.
 */
module.exports = {
    greater,
    equal,
    minor,
    notEqual,
}