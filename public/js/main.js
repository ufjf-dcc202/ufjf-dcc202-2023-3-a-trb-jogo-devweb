import { iSelectCol } from "./adiversario.js";
import { dado } from "./dado.js";
import { pontuacaoJogador } from "./pontuação.js";
import { selectCol } from "./tabela.js";

const rodar = document.querySelector('#rolar');
const c1 = document.querySelector('#c1');
const c2 = document.querySelector('#c2');
const c3 = document.querySelector('#c3');
const Jcaixadado = document.querySelector('#Jdado');
const Icaixadado = document.querySelector('#Idado'); 
const ptsJgdr = document.querySelector('#ptsJgdr');
let totalJogador = 0;
let totalComputador = 0;


rodar.addEventListener('click', turnojogador);

function turnojogador() 
{
    rodar.removeEventListener('click', turnojogador);

    const valorAtual = dado();
    Jcaixadado.innerHTML = valorAtual;

    c1.removeEventListener('click', selectCol1);
    c2.removeEventListener('click', selectCol2);
    c3.removeEventListener('click', selectCol3);

    c1.addEventListener('click', selectCol1);
    c2.addEventListener('click', selectCol2);
    c3.addEventListener('click', selectCol3);
}

function turnocomputador()
{
    const valorAtual = dado();
    console.log(valorAtual);
    Icaixadado.innerHTML = valorAtual;

    iSelectCol(valorAtual);
    Icaixadado.innerHTML = '';

    rodar.addEventListener('click', turnojogador);
}

function selectCol1()
{
    selectCol(1, Jcaixadado.innerHTML);
    Jcaixadado.innerHTML = '';

    totalJogador = pontuacaoJogador();
    ptsJgdr.innerHTML = totalJogador;

    turnocomputador();
}

function selectCol2()
{
    selectCol(2, Jcaixadado.innerHTML);
    Jcaixadado.innerHTML = '';

    totalJogador = pontuacaoJogador();
    ptsJgdr.innerHTML = totalJogador;

    turnocomputador();
}

function selectCol3()
{
    selectCol(3, Jcaixadado.innerHTML);
    Jcaixadado.innerHTML = '';

    totalJogador = pontuacaoJogador();
    ptsJgdr.innerHTML = totalJogador;

    turnocomputador();
}