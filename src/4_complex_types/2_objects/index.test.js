const { pet } = require("./index")

test("pet object has required properties and values",()=>{
    expect(pet).toHaveProperty("name", "KitKat")
    expect(pet).toHaveProperty("species", "cat")
    expect(pet).toHaveProperty("birthYear", 1983)
    expect(pet).toHaveProperty("friendly", true)
})
