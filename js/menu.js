// Abrir o menu
// Chamando a tag com uma constante
const menu_icon = document.getElementById('menu-icon')
const modal_container = document.getElementById('modal-container')
const nav = document.querySelectorAll('.nav .menu a')

// Aplicando a função de abrir o menu
menu_icon.addEventListener('click', () => {
    if (modal_container.style.display = 'none') {
        modal_container.style.display = 'block'
    }
})

// Sair do menu
// Chamada da tag por ID
const transparencia = window.document.querySelector('#transparencia')

// Aplicando função de sair do menu
if (innerWidth <= 1200) {
    transparencia.addEventListener('click', () => {
        modal_container.style.display = 'none'
    })
    
    nav.forEach((a) => {
        a.addEventListener('click', () => {
            modal_container.style.display = 'none'
        })
    })
}

// Acesso ao dropdown do menu desktop
const dropdown = document.querySelector("#dropdown")
const dropdownContent = document.querySelector("#dropdown-content")
const dropdownIcon = document.querySelector("#dropdown-icon")

// Regras para mostrar ou esconder o dropdown
function toggleDropdown(forceClose = false) {
    const isVisible = dropdownContent.style.display === 'flex'

    if (forceClose || isVisible) {
        dropdownContent.style.display = 'none'
        dropdownIcon.setAttribute("aria-expanded", "false")
        dropdownIcon.style.color = 'var(--amarela)'

    } else {
        dropdownContent.style.display = 'flex'
        dropdownIcon.setAttribute("aria-expanded", "true")
        dropdownIcon.style.color = 'var(--laranja)'
    }
}

// Abrir com Enter ou Espaço
dropdownIcon.addEventListener('keydown', (tecla) => {
    if (tecla.key === 'Enter' || tecla.key === ' ') {
        tecla.preventDefault()
        toggleDropdown()

    } else if (tecla.key === 'Escape') {
        toggleDropdown(true)
        dropdownIcon.focus()
    }
})

// Abrir e fechar via mouse
dropdown.addEventListener('mouseenter', () => toggleDropdown())
dropdown.addEventListener('mouseleave', () => toggleDropdown(true))

// Fechar o dropdown se clicar fora
document.addEventListener('click', (e) => {
    if (!document.querySelector("#dropdown").contains(e.target)) {
        toggleDropdown(true)
    }
})

// Fechar o menu se perder o foco
dropdownContent.addEventListener('focusout', () => {
    // Verifica se o novo foco está fora do dropdown
    setTimeout(() => {
        if (!dropdownContent.contains(document.activeElement)) {
            toggleDropdown(true)
        }
    }, 10)
})
