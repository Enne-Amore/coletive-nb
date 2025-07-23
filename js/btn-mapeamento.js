// Chamada do botão
const link_principal = document.querySelectorAll('.link-principal')

link_principal.forEach((btn) => {
    btn.addEventListener('click', () => {
        // Chamada da seção
        const btn_mapeamento = document.getElementById('btn-mapeamento')
    
        // Animação da seção
        btn_mapeamento.style.animation = 'btn-mapeamento .8s ease-out .7s'
    
        // Remover animação
        setTimeout(() => {
            btn_mapeamento.style.animation = 'none'
        }, 2000)
    })
})
