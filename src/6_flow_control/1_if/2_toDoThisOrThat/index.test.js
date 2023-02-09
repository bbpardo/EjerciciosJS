const { saludarAs } = require("./index")

test("Bos días",()=>{
    expect(saludarAs(9)).toBe("Bos días")
})

test("Boas noites",()=>{
    expect(saludarAs(6)).toBe("Boas noites")
})