const { applesPrice, orangesPrice, total, aVariable, bVariable } = require("./index")

test("aVariable and bVariable has diferent values", ()=>{
    expect(aVariable).not.toEqual(bVariable)
})