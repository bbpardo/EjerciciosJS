const { vatTypes } = require("./defines.js");

/**
 * Article object
 * @typedef {Object} Article
 * @property {number} id - Article unique identificator.
 * @property {string} description - Article human readable description.
 * @property {number} retailPrice - Article price.
 * @property {number} vatType - Article VAT type index.
 */

/**
 * Shopping cart element
 * @typedef {Object} ShoppingCartItem
 * @property {Article} article - Article object.
 * @property {number} units - Article units ammount.
 */

/**
 * Entra el precio del artículo en base a las unidades
 * del mismo.
 * @param {Article} article 
 * @param {number} units 
 * @returns {number}
 */
 function articleBasePrice(article,units) {
    return article.retailPrice * units
}

/**
 * Entrega la cantidad de IVA correspondiente a determinadas
 * unidades de un artículo.
 * @param {Article} article 
 * @param {number} units 
 * @returns {number}
 */
function articleVatAmmount(article,units) {
    return article.retailPrice * vatTypes[article.vatType].factor * units;
}

/**
 * Entrega el total del artículo para un número de unidades, incluyendo
 * el IVA
 * @param {Article} article 
 * @param {number} units 
 * @returns {number}
 */
function articleTotal(article,units) {
    return articleBasePrice(article,units) + articleVatAmmount(article,units)
}

/**
 * Entrega el total sin IVA para el un carrito de la compra
 * @param {ShoppingCartItem[]} cart 
 * @returns {number}
 */
function totalBasePrice(cart) {
    let total = 0;
    cart.forEach(
        item => total += item.article.retailPrice * item.units
    )
    return total
}








function totalVAT(cart) {
    let total = 0;
    cart.forEach(
        item => total += articleTotal(item.article.retailPrice,item.units) + articleVatAmmount(item.article.retailPrice,item.units)
    )
    return total
}

module.exports = {
    articleBasePrice,
    articleVatAmmount,
    articleTotal,
    totalBasePrice,
    totalVAT,
}