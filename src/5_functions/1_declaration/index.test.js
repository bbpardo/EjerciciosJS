const {
    loggedInMessageFor,
    messageForAndrea,
    messageForRamiro
} = require("./index")

describe("Checking messages for Andrea and Ramiro", ()=>{
    test("Message for Andrea",()=>{
        expect(messageForAndrea).toBe("Hi Andrea, you are logged in.")
    })
    test("Message for Ramiro",()=>{
        expect(messageForRamiro).toBe("Hi Ramiro, you are logged in.")
    })
})

test("Tesging new message",()=>{
    expect(loggedInMessageFor("Daniel")).toBe("Hi Daniel, you are logged in.")
})

