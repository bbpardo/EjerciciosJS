/**
 * true and false are the data for logical operators.
 * "and" operator:
 * - true && true 👉 true
 * - false && true 👉 false
 * - true && false 👉 false
 * - false && false 👉 false
 * "or" operator:
 * - true || true 👉 true
 * - false || true 👉 true
 * - true || false 👉 true
 * - false || false 👉 false
 * "not" operator:
 * - ! true 👉 false
 * - ! false 👉 true
 * 
 * Example 1:
 * let iAmHungry = true
 * let iHaveDisses = true
 * let iEat = iAmHungry && iHaveDisses
 * 
 * Example 2:
 * let iAmHungry = true
 * let iHaveFood = false
 * let iHaveMoney = true
 * let itsWeekday = true
 * let iEat = iAmHungry && ( iHaveDisses || (iHaveMoney && itsWeekday) )
 * 
 * Exercise:
 * - Replace the ❓ with the comparison operator who provides a true for each expression.
 * - May be multiple comparison operators provides a true.
 */

let itsSunny = false
let imOnHolidays = false
let iLikeBeach = false
let iSurf = false
let thereAreWaves = false
let beachIsCloseEnough = false
let thereAreNoSharks = false
let iGoToTheBeach = ( 
        (
            itsSunny &&
            imOnHolidays &&
            iLikeBeach &&
            beachIsCloseEnough
        ) || (
            iSurf && thereAreWaves
        )
    ) && thereAreNoSharks

/**
 * Don't to change next lines.
 */
module.exports = { iGoToTheBeach }