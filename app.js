let hamburger = document.querySelector('.navHamburger');
let container = document.querySelector('.container')
console.log(hamburger);

hamburger.addEventListener('click', () => {
    container.classList.toggle('hiddenContainer')
})