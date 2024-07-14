const logo = document.querySelector('.logo')
const menu = document.querySelector('.menu')

logo.addEventListener('click', () => {
    if(menu.classList.contains('show')) {
        menu.classList.remove('show')
    } else {
        menu.classList.add('show')
    }
})