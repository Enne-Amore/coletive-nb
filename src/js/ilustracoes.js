// declaração de variáveis
const sliders = document.querySelectorAll('.imgs-container')
let isDown = false
let startX
let scrollLeft

// seleção de carrosséis
for (let i = 0; i <= 1; i++) {
    sliders[i].addEventListener('mousedown', (e) => {
        isDown = true
        
        // realizar movimento horizontal
        scrollLeft = sliders[i].scrollLeft
        startX = e.pageX - sliders[i].offsetLeft
        
        sliders[i].style.cursor = 'grabbing'
    })
    
    sliders[i].addEventListener('mouseleave', () => {
        isDown = false
        
        sliders[i].style.cursor = 'grabbing'
    })
    
    sliders[i].addEventListener('mouseup', () => {
        isDown = false
        
        sliders[i].style.cursor = 'grab'
    })
    
    sliders[i].addEventListener('mousemove', (e) => {
        if (isDown === false) { // não fazer nada se o clique não estiver pressionado
            return

        } else { // movimentar o scroll se o clique estiver pressionado
            e.preventDefault()
            
            // realizar aceleração do movimento horizontal
            const x = e.pageX - sliders[i].offsetLeft
            const walk = (x - startX) * 1
            sliders[i].scrollLeft = scrollLeft - walk
        }
    })
}
