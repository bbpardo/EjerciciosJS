const { 
    greater,
    equal,
    minor,
    notEqual,
} = require("./index")

describe("Tests results", ()=>{

    test("greater is true", ()=>{
        expect(greater).toBe(true)
    })

    test("equal is true", ()=>{
        expect(equal).toBe(true)
    })

    test("minor is true", ()=>{
        expect(minor).toBe(true)
    })

    test("notEqual is true", ()=>{
        expect(notEqual).toBe(true)
    })

})