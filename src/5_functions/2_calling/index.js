/**
 * Many time we need to provide some data to functions.
 * These are called arguments.
 * If you want to use a function who provides the word
 * in the position x in a sentence,
 * you may provide a sentence and a number x.
 * The "return" reserved word defines what will be the function response.
 * Once "return" is called, function stop working. No matters there are more
 * code lines below.
 * If you need to use the function response, you must save that in
 * a variable or a constant.
 * 
 * Exercise:
 * 
 * Use "aEnesimaPalabraDaFrase" function for getting the 4th word in 
 * the sentence stored in "fraseEnCuestion" constant and store it in "palabra"
 * variable.
 * 
 */

let palabra
const fraseEnCuestion = "Cando están durmindo parecen inofensivos"

function aEnesimaPalabraDaFrase(frase, numero) {
    const palabras = frase.split(" ")
    enesimaPalabra = palabras[numero-1]
    return enesimaPalabra
}

// Write your code here

/**
 * Don't to change next lines.
 */
module.exports = { palabra }