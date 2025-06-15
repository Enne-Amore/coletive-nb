// declaração de variáveis
const sliders = document.querySelectorAll('.imgs-container')
let isDown = false
let startX
let scrollLeft

sliders.forEach((slider) => {
    slider.addEventListener('mousedown', (e) => {
        isDown = true
        
        // realizar movimento horizontal
        scrollLeft = slider.scrollLeft
        startX = e.pageX - slider.offsetLeft
        
        slider.style.cursor = 'grabbing'
    })
    
    slider.addEventListener('mouseleave', () => {
        isDown = false
        
        slider.style.cursor = 'grabbing'
    })
    
    slider.addEventListener('mouseup', () => {
        isDown = false
        
        slider.style.cursor = 'grab'
    })
    
    slider.addEventListener('mousemove', (e) => {
        if (isDown === false) { // não fazer nada se o clique não estiver pressionado
            return

        } else { // movimentar o scroll se o clique estiver pressionado
            e.preventDefault()
            
            // realizar aceleração do movimento horizontal
            const x = e.pageX - slider.offsetLeft
            const walk = (x - startX) * 1
            slider.scrollLeft = scrollLeft - walk
        }
    })
})
