const { divisionDe } = require("./index")

test("Avoid to divide by zero",()=>{
    expect(divisionDe(1,0)).toBeUndefined()
})

test("Divides",()=>{
    expect(divisionDe(10026,2)).toEqual(5013)
})