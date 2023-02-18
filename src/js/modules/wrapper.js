export function init() {
    const mainOpenBtns = document.querySelectorAll('.mainOpen')
    const categoryOpenBtns = document.querySelectorAll('.categoryOpen')

    const wrappers = document.querySelectorAll('section')
    const main = document.querySelector('.main')
    const category = document.querySelector('.product')

    mainOpenBtns.forEach(el => {
        el.addEventListener('click', () => {
            wrappers.forEach(sec => {
                sec.classList.remove('active')
            })
            main.classList.add('active')
        })
    })

    categoryOpenBtns.forEach(el => {
        el.addEventListener('click', () => {
            wrappers.forEach(sec => {
                sec.classList.remove('active')
            })
            category.classList.add('active')
        })
    })
}