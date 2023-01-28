const { 
    myVariable,
    firstVariable,
    secondVariable
} = require("./index")

describe("All variables equals 42", ()=>{

    test("firstVariable equals 42 ",()=>{
        expect(firstVariable).toBe(42)
    })
    
    test("secondVariable equals 42", ()=>{
        expect(secondVariable).toBe(42)
    })
    
    test("myVariable equals 42", ()=>{
        expect(myVariable).toBe(42)
    })

})