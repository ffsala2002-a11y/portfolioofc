const configAlert = {
    warning: {
        message: "Preencha os campos para continuar."
    }
};

const modalAlert = document.getElementById('modalAlert');
const messageAlert = document.getElementById('message');

let timeId;
const timer = 2500

export default function showAlert(type) {
    const veryConfig = configAlert[type];

    if (!veryConfig) {
        console.error(`${type} inválido. Não tem esse dado no seu objeto (configAlert)`);

        return;
    };

    clearTimeout(timeId);

    modalAlert.classList.add('active');
    messageAlert.textContent = veryConfig.message;

    timeId = setTimeout(() => {
        modalAlert.classList.remove('active');
    }, timer)
}