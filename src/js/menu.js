// Abrir o menu
// Chamando a tag com uma constante
const menu = document.getElementById('menu')

// Aplicando a função de abrir o menu
menu.addEventListener('click', () => {
    if (nav.style.display = 'none') {
        nav.style.display = 'block'
    }
})

// Acesso ao menu usando o teclado
menu.addEventListener('keypress', (tecla) => {
    if (tecla.key === 'Enter') {
        tecla.target.click()
    }
})

// Sair do menu
// Chamada das tags por ID's
const logo = window.document.querySelector('.logo')
const nav = window.document.querySelector('.nav')
const conteudo = window.document.getElementById('conteudo')
const rodape = window.document.getElementById('rodape')

// Adicionar o evento nelas
if (innerWidth < 1200) {
    logo.addEventListener('click', sairDoMenu)
    nav.addEventListener('click', sairDoMenu)
    conteudo.addEventListener('click', sairDoMenu)
    rodape.addEventListener('click', sairDoMenu)
}

// Aplicando função de sair do menu
function sairDoMenu() {
    nav.style.display = 'none'
}
