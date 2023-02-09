import {
    entradaDoTexto,
    saidaNumeroCaracteres,
    saidaNumeroPalabras,
    actualizaNumeroCaracteres,
    actualizaNumeroPalabras
} from "./resposta.js"

const testParagraph = document.querySelector("#test")

entradaDoTexto.value = "Se non mo dixeras xuraría que o terías calado."
actualizaNumeroCaracteres()
actualizaNumeroPalabras()

testParagraph.innerText = (
    entradaDoTexto === document.querySelector("textarea")
    && saidaNumeroCaracteres === document.querySelector("#numeroCaracteres")
    && saidaNumeroPalabras === document.querySelector("#numeroPalabras")
    && typeof(actualizaNumeroCaracteres) === "function"
    && typeof(actualizaNumeroPalabras) === "function"
    && saidaNumeroCaracteres.innerText === entradaDoTexto.value.length.toString()
    && saidaNumeroPalabras.innerText === entradaDoTexto.value.split(" ").length.toString()
)


saidaNumeroCaracteres.innerText = ""
saidaNumeroPalabras.innerText = ""
entradaDoTexto.value = ""
