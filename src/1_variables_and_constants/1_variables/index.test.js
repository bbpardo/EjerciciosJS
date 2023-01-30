const { 
    myEmptyVariable,
    myBornYear,
    myAge
} = require("./index")

test("myEmptyVariable is empty",()=>{
    expect(myEmptyVariable).toBe(undefined)
})

test("myBornYear contains 1927", ()=>{
    expect(myBornYear).toBe(1927)
})

test("myAge contains 42", ()=>{
    expect(myAge).toBe(42)
})