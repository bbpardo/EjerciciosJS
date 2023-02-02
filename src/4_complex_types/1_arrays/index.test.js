const { primes } = require("./index")

test("primes is [2, 3, 5, 7, 13]",()=>{
    expect(primes).toEqual([2, 3, 5, 7, 13])
})
