const { vowels } = require("./index")

test("Vowels array is completed",()=>{
    expect(vowels).toEqual(["a","e","i","o","u"])
})
