const { myResultGuess, changingValue } = require("./index")

test("You guessed the result", ()=>{
    expect(myResultGuess).toEqual(changingValue)
})