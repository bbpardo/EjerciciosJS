/**
 * Functions are blocks of code who we can use again and again
 * without rewriting the code.
 * We can write the function one time and use it many times
 * in different points of our code.
 * Functions gets data from "parameters" and returns "results"
 * after "doing things" with the parameters data.
 * 
 * Example:
 * 
 * That code defines a function named "sayHiTo" who gets data
 * through the "name" parameter and returns the result of
 * append the value on name to "Hi " string
 * 
 * function sayHiTo(name) {
 *   const hello = "Hi " + name
 *   return hello
 * }
 * 
 * const pedroWelcome = sayHiTo("Pedro") // pedroWelcome === "Hi Pedro" 
 * const anaWelcome = sayHiTo("Ana") // anaWelcome === "Hi Ana"
 * 
 * Exercise:
 * 
 * Write the code in the "loggedInMessageFor" function
 * for returning a string like:
 * 
 * "Hi AnyName, you are logged in."
 * 
 */

function loggedInMessageFor(userName) {
    // Write your code here.
}

const messageForAndrea = loggedInMessageFor("Andrea")
const messageForRamiro = loggedInMessageFor("Ramiro")

/**
 * Don't to change next lines.
 */
module.exports = { loggedInMessageFor, messageForAndrea, messageForRamiro }