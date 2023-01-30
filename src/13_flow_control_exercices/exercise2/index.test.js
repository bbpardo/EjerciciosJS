let { counter, numbers } = require("./index")

test("El array numbers no ha sido modificado", ()=>{
    expect(numbers).toEqual(expect.arrayContaining([0,1,2,4,5,9,3,6,7,8]))
})

test("Se han contado los elementos del array numbers", ()=>{
    expect(counter).toEqual(10)
})