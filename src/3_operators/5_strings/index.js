/**
 * The + operator works with strings by linking together two strings.
 * If we provide a string and other kind of data to the + operator, JavaScript tries
 * to convert all values to strings and concatenate them.
 * 
 * Exercise:
 * Change userName value for getting responseText to be:
 * "Thank you for your message, Rigoberto. You have an appointment tomorrow at 12:00"
 * 
 */

let userName
let responseText = "Thank you for your message, " + userName + ". You have an appointment tomorrow at 12:00"

/**
 * Don't to change next lines.
 */
module.exports = { userName, responseText }