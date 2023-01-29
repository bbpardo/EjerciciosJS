const { 
    myNumber,
    myString,
    turnedOn,
    noValue,
    unknownValue,
} = require("./index")

test("myNumber value is a number",()=>{
    expect(typeof myNumber).toBe("number")
})

test("myString value is a string",()=>{
    expect(typeof myString).toBe("string")
})

test("turnerOn value is a boolean",()=>{
    expect(typeof turnedOn).toBe("boolean")
})

test("noValue value is undefined",()=>{
    expect(typeof noValue).toBe("undefined")
})

test("unknownValue value is null",()=>{
    expect(unknownValue).toEqual(null)
})