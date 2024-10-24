const sliders = document.querySelectorAll('.imgs-container')
let isDown = false
let startX
let scrollLeft

sliders.forEach((slider) => {
    slider.addEventListener('mousedown', (e) => {
        isDown = true
        scrollLeft = slider.scrollLeft
        startX = e.pageX - slider.offsetLeft
        slider.style.cursor = 'grabbing'
    })
    
    slider.addEventListener('mouseleave', () => {
        isDown = false
        scrollLeft = slider.scrollLeft
        startX = e.pageX - slider.offsetLeft
        slider.style.cursor = 'grabbing'
    })
    
    slider.addEventListener('mouseup', () => {
        isDown = false
        slider.style.cursor = 'grab'
    })
    
    slider.addEventListener('mousemove', (e) => {
        if (!isDown) {
            return

        } else {
            e.preventDefault()
            const x = e.pageX - slider.offsetLeft
            const walk = (x - startX) * 2
            slider.scrollLeft = scrollLeft - walk
        }
    })        
})
