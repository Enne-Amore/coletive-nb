const load = document.querySelector("#load")
const header = document.querySelector("#cabecalho")
const main = document.querySelector("#conteudo")
const footer = document.querySelector("#rodape")

window.addEventListener("load", () => {
  html.style.animation = "aparecer 0.5s ease-out"
  load.style.display = "none"
  header.style.display = "flex"
  main.style.display = "block"
  footer.style.display = "flex"
})
