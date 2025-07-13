// Chamada do botão
const btn_faca_parte = document.querySelectorAll('.link-principal')

btn_faca_parte.forEach((btn) => {
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
