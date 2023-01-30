const { numbers, odd, even } = require("./index")

test("O array numbers non foi modificado", ()=>{
    expect(numbers).toEqual(expect.arrayContaining([22,1,4,3,5,7,8,9,12,11]))
})

test("O array odd ten os números impares", ()=>{
    expect(odd).toEqual(expect.arrayContaining([1,3,5,7,9,11]))
})

test("O array even ten os números pares", ()=>{
    expect(even).toEqual(expect.arrayContaining([22,4,8,12]))
})
