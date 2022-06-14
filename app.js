let hamburger = document.querySelector('.navHamburger');
let menuHidden = document.querySelector('.bgMenuHidden')
let barre1 = document.querySelector('.b1')
let barre2 = document.querySelector('.b2')
let barre3 = document.querySelector('.b3')

console.log(hamburger);

hamburger.addEventListener('click', () => {
    menuHidden.classList.toggle("hidden") ;
    barre1.classList.toggle('translateb1');
    barre2.classList.toggle('rotateb2');
    barre3.classList.toggle('translateb3');

})