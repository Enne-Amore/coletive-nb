// Abrir o menu
// Chamando a tag com uma constante
const menu_icon = document.getElementById('menu-icon')
const modal_container = document.getElementById('modal-container')

// Aplicando a função de abrir o menu
menu_icon.addEventListener('click', () => {
    if (modal_container.style.display = 'none') {
        modal_container.style.display = 'block'
    }
})

// Acesso ao menu usando o teclado
menu_icon.addEventListener('keypress', (tecla) => {
    if (tecla.key === 'Enter') {
        tecla.target.click()
    }
})

// Sair do menu
// Chamada da tag por ID
const transparencia = window.document.querySelector('#transparencia')

// Aplicando função de sair do menu
if (innerWidth < 1200) {
    transparencia.addEventListener('click', () => {
        modal_container.style.display = 'none'
    })
}
