import sendMessage from "./modules/whatsapp.js";
import showAlert from "./modules/modalError.js";

const input = document.getElementById('inputName');
const textArea = document.getElementById('textMessage');
const form = document.getElementById('formZap');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const valueInput = input.value.trim();
    const valueTextArea = textArea.value.trim();

    if (!valueInput || !valueTextArea) {
        showAlert("warning");

        return;
    };

    sendMessage(valueInput, valueTextArea)
})