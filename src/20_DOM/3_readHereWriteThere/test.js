import {
    entradaDoTexto,
    saidaDoResultado,
    actualizaSaidaEnMaiusculas
} from "./resposta.js"

const testParagraph = document.querySelector("#test")

testParagraph.innerText = (
    entradaDoTexto === document.querySelector("textarea")
    && saidaDoResultado === document.querySelector("p#enMaiusculas")
    && typeof(actualizaSaidaEnMaiusculas) === "function"
    && saidaDoResultado.innerText === entradaDoTexto.value.toUpperCase()
)
