import sendMessage from "./modules/whatsapp.js";
import showAlert from "./modules/modalError.js";
import { toggleMenu, closeMenu } from './modules/mobileMenu.js';

const input = document.getElementById('inputName');
const textArea = document.getElementById('textMessage');
const form = document.getElementById('formZap');
const btnClose = document.getElementById('btnClose');
const menuButton = document.querySelector('.menu-button');
const bgNavigation = document.getElementById('navigationBackground');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const valueInput = input.value.trim();
    const valueTextArea = textArea.value.trim();

    if (!valueInput || !valueTextArea) {
        showAlert("warning");

        return;
    };

    sendMessage(valueInput, valueTextArea)
});



menuButton.addEventListener('click', toggleMenu);
bgNavigation.addEventListener('click', closeMenu);
btnClose.addEventListener('click', closeMenu);