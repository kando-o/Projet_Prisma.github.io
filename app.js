let hamburger = document.querySelector('.navHamburger');
let menuHidden = document.querySelector('.bgMenuHidden')

let banner = document.querySelector('.banner')
let bannerImg = document.querySelector('img')


let barre1 = document.querySelector('.b1')
let barre2 = document.querySelector('.b2')
let barre3 = document.querySelector('.b3')

// Event au click sur l'icone hamburger

hamburger.addEventListener('click', () => {
    menuHidden.classList.toggle("hidden") ;
    barre1.classList.toggle('translateb1');
    barre2.classList.toggle('rotateb2');
    barre3.classList.toggle('translateb3');

})

// Parallaxe 

window.addEventListener('scroll', () => {
    console.log(window.scrollY);
    banner.style.backgroundPositionY = window.scrollY / 2 + "px" ;
})
