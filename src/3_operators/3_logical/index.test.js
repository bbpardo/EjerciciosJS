const { iGoToTheBeach } = require("./index")

test("Am I going to the beach?", ()=>{
    expect(iGoToTheBeach).toBe(true)
})