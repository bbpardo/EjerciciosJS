let {numbers, sum, average, counter} = require("./index")

test("Array numbers no ha sido modificado",()=>{
    expect(numbers).toEqual([0,99,3,121,12,1,2])
})

test("Counter es siete", ()=>{
    expect(counter).toEqual(7)
})

test("Sum es doscientos treinta y ocho",()=>{
    expect(sum).toEqual(238)
})

test("Average es treinta y cuatro", ()=>{
    expect(average).toEqual(34)
})