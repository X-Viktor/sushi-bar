function burgerMenu() {
    window.scroll()
    let menu = document.querySelector('.menu');
    let burger = document.querySelector('.burger-menu');
    let body = document.querySelector('body');
    menu.classList.toggle('menu__burger_active');
    burger.classList.toggle('burger-menu_active');
    if (menu.classList.contains('menu__burger_active')) {
        body.style.overflow = 'auto';
    } else {
        body.style.overflow = 'hidden';
    }
}

function moveCart() {
    let menu = document.querySelector('.menu');
    let contacts = document.querySelector('.contacts');
    if (window.innerWidth < 767) {
        let cart = document.querySelector('.cart');
        menu.before(cart);
        menu.append(contacts);
    } else {
        menu.after(contacts);
    }
}

moveCart();

window.addEventListener('resize', moveCart);