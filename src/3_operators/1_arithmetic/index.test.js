const { 
    productPrize,
    VATPercentage,
    VATRatio,
    VATValue,
    total,
} = require("./index")

describe("Original values still unchanged", ()=>{

    test("productPrize contains 42", ()=>{
        expect(productPrize).toBe(42)
    })

    test("productPrize contains 4", ()=>{
        expect(VATPercentage).toBe(4)
    })

})

describe("Tests results", ()=>{

    test("VATRatio contains 0.04", ()=>{
        expect(VATRatio).toEqual(expect.closeTo(0.04))
    })

    test("VATValue contains 1.68", ()=>{
        expect(VATValue).toEqual(expect.closeTo(1.68))
    })

    test("total contains 43.68", ()=>{
        expect(total).toEqual(expect.closeTo(43.68))
    })

})