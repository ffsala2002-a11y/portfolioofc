const bgNavigation = document.getElementById('navigationBackground');
const menu = document.querySelector('.main-navigation');
const body = document.querySelector('body');

const toggleMenu = () => {
    menu.classList.toggle('active');
    bgNavigation.classList.toggle('active');
    body.classList.toggle('scroll-hidden');
};

const closeMenu = () => {
    menu.classList.remove('active');
    bgNavigation.classList.remove('active');
    body.classList.remove('scroll-hidden');
};

export { toggleMenu, closeMenu };