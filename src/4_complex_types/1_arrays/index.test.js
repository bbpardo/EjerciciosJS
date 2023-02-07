const { primes } = require("./index")

test("primes is [2, 3, 5, 7, 11]",()=>{
    expect(primes).toEqual([2, 3, 5, 7, 11])
})
