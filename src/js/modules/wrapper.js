export function init() {
    const openMain = document.querySelectorAll('.main-open')
    openMain.forEach(el => {
        el.addEventListener('click', () => {
            
        })
    })

    const foo = document.querySelectorAll('.foo')
    foo.forEach(el => {
        el.addEventListener('click', () => {
            const sections = document.querySelectorAll('section')
            sections.forEach(el => {
                el.classList.remove('active')
            })
        })
    })
}