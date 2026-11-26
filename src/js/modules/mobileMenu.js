const bgNavigation = document.getElementById('navigationBackground');
const menu = document.querySelector('.main-navigation');

const toggleMenu = () => {
    menu.classList.toggle('active');
    bgNavigation.classList.toggle('active');
};

const closeMenu = () => {
    menu.classList.remove('active');
    bgNavigation.classList.remove('active');
};

export { toggleMenu, closeMenu };