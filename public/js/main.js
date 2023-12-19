import { dado } from "./dado.js";
import { selectCol } from "./tabela.js";

const rodar = document.querySelector('#rolar');
const c1 = document.querySelector('#c1');
const c2 = document.querySelector('#c2');
const c3 = document.querySelector('#c3');
const caixadado = document.querySelector('#dado');


rodar.addEventListener('click', turnojogador);

function turnojogador() 
{
    rodar.removeEventListener('click', turnojogador);

    const valorAtual = dado();
    caixadado.innerHTML = valorAtual;

    c1.removeEventListener('click', selectCol1);
    c2.removeEventListener('click', selectCol2);
    c3.removeEventListener('click', selectCol3);

    c1.addEventListener('click', selectCol1);
    c2.addEventListener('click', selectCol2);
    c3.addEventListener('click', selectCol3);

}

function turnocomputador()
{

}

function selectCol1()
{
    selectCol(1, caixadado.innerHTML);
    caixadado.innerHTML = '';
    rodar.addEventListener('click', turnojogador);
}

function selectCol2()
{
    selectCol(2, caixadado.innerHTML);
    caixadado.innerHTML = '';
    rodar.addEventListener('click', turnojogador);
}

function selectCol3()
{
    selectCol(3, caixadado.innerHTML);
    caixadado.innerHTML = '';
    rodar.addEventListener('click', turnojogador);
}