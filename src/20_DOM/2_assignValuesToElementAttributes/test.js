import { resposta } from "./resposta.js"

const testParagraph = document.querySelector("span#test")
testParagraph.innerHTML = document.querySelector("input").value === "ola"
