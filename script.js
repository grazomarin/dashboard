const icons = Array.from(document.querySelectorAll('.icon'))
const sideLinks = Array.from(document.querySelectorAll('.sideLink'))

sideLinks.forEach((link) => {
    link.addEventListener('mouseover', () => {
        icons.forEach((icon) => {
            if (Array.from(icon.classList)[1] == Array.from(link.classList)[1]) 
                {icon.style.fill = '#00ADB5'}
        })
    })
    link.addEventListener('mouseout', () => {
        icons.forEach((icon) => {
            if (Array.from(icon.classList)[1] == Array.from(link.classList)[1]) 
                {icon.style.fill = '#ccc'}
        })
    })
})