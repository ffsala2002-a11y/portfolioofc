const bgNavigation = document.getElementById('navigationBackground');

const toggleMenu = () => {
    const menu = document.querySelector('.main-navigation');
    menu.classList.toggle('active');
    bgNavigation.classList.toggle('active');
};

const closeMenu = () => {
    const menu = document.querySelector('.main-navigation');
    menu.classList.remove('active');
    bgNavigation.classList.remove('active');
};

export { toggleMenu, closeMenu };