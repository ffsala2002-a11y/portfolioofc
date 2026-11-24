import sendMessage from "./modules/whatsapp.js";

const input = document.getElementById('inputName');
const textArea = document.getElementById('textMessage');
const form = document.getElementById('formZap');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const valueInput = input.value.trim();
    const valueTextArea = textArea.value.trim();

    if (!valueInput || !valueTextArea) {
        alert("Vazio");

        return;
    }

    sendMessage(valueInput, valueTextArea)
})