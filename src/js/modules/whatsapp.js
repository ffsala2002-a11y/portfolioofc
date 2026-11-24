export default function sendMessage(nome, message) {
    const tel = 5563999789035;
    const mensagem = `Me chamo ${nome}, ${message}`;

    const url = `https://wa.me/${tel}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");
}