const { 
    odd,
    pet,
} = require("./index")

test("odd is the [1,3,5,7] array",()=>{
    expect(odd).toEqual([1,3,5,7])
})

describe("pet object has required properties", ()=>{
    test("pet has name property",()=>{
        expect(pet.hasOwnProperty("name")).toBe(true)
    })
    test("pet has birthYear attribute",()=>{
        expect(pet.hasOwnProperty("birthYear")).toBe(true)
    })
    test("pet has vaccined property",()=>{
        expect(pet.hasOwnProperty("vaccined")).toBe(true)
    })
})

describe("pet object has required values", ()=>{
    test("pet name property contains KitKat",()=>{
        expect(pet.name).toBe("KitKat")
    })
    test("pet birthYear property contains 1983",()=>{
        expect(pet.birthYear).toBe(1983)
    })
    test("pet vaccined property contains true",()=>{
        expect(pet.vaccined).toBe(true)
    })
})
