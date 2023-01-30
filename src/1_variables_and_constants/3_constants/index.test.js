const { applesPrice, orangesPrice, total } = require("./index")

describe ("Original code still the same", ()=>{
    
    test("Total is the sum of oranges prizes and apples prize",()=>{
        expect(total).toEqual(applesPrice + orangesPrice)
    })
    
    test("Apples prize equals 12", ()=>{
        expect(applesPrice).toEqual(12)
    })
    
})

test("Total is equal to 42", ()=>{
    expect(total).toEqual(42)
})