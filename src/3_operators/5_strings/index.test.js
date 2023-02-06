const { userName, responseText } = require("./index")

test("userName is not undefined", ()=>{
    expect(userName).not.toEqual(undefined)
})

test("We got the wright message", ()=>{
    expect(responseText).toBe("Thank you for your message, Rigoberto. You have an appointment tomorrow at 12:00")
})