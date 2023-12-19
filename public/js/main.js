import { dado } from "./dado.js";

const rodar = document.querySelector('#rolar');
const caixadado = document.querySelector('#dado');

rodar.addEventListener('click', rolardado);

function rolardado() {
    const valoratual = dado();
    caixadado.innerHTML = valoratual;
}
