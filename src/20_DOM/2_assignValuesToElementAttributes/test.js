import { resposta } from "./resposta.js"

const testParagraph = document.querySelector("span#test")
const testInput = document.querySelector("input")
testParagraph.innerHTML = testInput.value === "ola" && testInput === resposta
