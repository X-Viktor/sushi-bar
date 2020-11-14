function burgerMenu() {
    window.scroll()
    let menu = document.querySelector('.menu');
    let burger = document.querySelector('.burger-menu');
    let body = document.querySelector('body');
    menu.classList.toggle('menu__burger_active');
    burger.classList.toggle('burger-menu_active')
    body.style.overflow = 'hidden';
}

function moveCart() {
    if (window.innerWidth < 575) {
        let cart = document.querySelector('.cart');
        let menu = document.querySelector('.menu');
        menu.before(cart);
    }
}

moveCart();

window.addEventListener('resize', moveCart);