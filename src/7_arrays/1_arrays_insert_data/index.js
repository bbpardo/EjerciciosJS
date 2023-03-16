/**
 *
 * Example:
 * 
 * const lista = ["apple", "banana"]
 * lista.push("jam") // ["apple", "banana", 👉"jam"]
 * lista.unshift("caffee") // [👉"caffee", "apple", "banana", "jam"]
 * lista = [...lista, "pineapple"] // ["caffee", "apple", "banana", "jam", 👉"pineapple"]
 * lista = ["bread", ...lista] // [👉"bread", "caffee", "apple", "banana", "jam", "pineapple"]
 * 
 * const cosas = ["pencil", "ball"]
 * const otrasCosas = ["phone"]
 * cosas.append(otrasCosas) // ["pencil", "ball", 👉"phone"]
 * const masCosas = ["flute", "shrubbery"]
 * const algunasCosas = [...otrasCosas, ...masCosas] // ["phone", "flute", "shrubbery"]
 * 
 * Exercise:
 * 
 * Get all five vowels in vowels array.
 * 
 */

const vowels = []
const ones = ["a","e"]
const anothers = ["o","u"]

// Your code here

/**
 * Don't to change next lines.
 */
module.exports = { vowels }