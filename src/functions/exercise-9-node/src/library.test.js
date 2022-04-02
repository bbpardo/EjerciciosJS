const { articles, cart } = require("./mockedDb");
const { 
    articleBasePrice,
    articleVatAmmount,
    articleTotal,
    totalBasePrice,
} = require("./library.js")

test('Total artículo sin IVA', () => {
    expect(articleBasePrice(articles[0],1)).toBe(1.20);
    expect(articleBasePrice(articles[1],2)).toBe(1.0*2);
    expect(articleBasePrice(articles[2],3)).toBe(5.99*3);
    expect(articleBasePrice(articles[0],4)).toBe(1.20*4);
});

test('Importe IVA artículo', () => {
    expect(articleVatAmmount(articles[0],1)).toBe(1.20*0.04);
    expect(articleVatAmmount(articles[1],2)).toBe(1.0*0.1*2);
    expect(articleVatAmmount(articles[2],3)).toBe(5.99*0.21*3);
    expect(articleVatAmmount(articles[0],4)).toBe(1.20*0.04*4);
});

test('Total artículo', () => {
    expect(articleTotal(articles[0],1)).toBe((1.20*0.04)+1.20);
    expect(articleTotal(articles[1],2)).toBe((1.0*0.1*2)+(1.0*2));
    expect(articleTotal(articles[2],3)).toBe((5.99*0.21*3)+(5.99*3));
    expect(articleTotal(articles[0],4)).toBe((1.20*0.04*4)+(1.20*4));
});

test('Total carrito sin IVA', () => {
    expect(totalBasePrice(cart)).toBe(1.2*3+5.99+1.2*5);
});

test('Total IVA carrito por tipo', () => {
    expect(totalBasePrice(cart)).toBe(null);
});

test('Total carrito con IVA', () => {
    expect(totalBasePrice(cart)).toBe(null);
});

