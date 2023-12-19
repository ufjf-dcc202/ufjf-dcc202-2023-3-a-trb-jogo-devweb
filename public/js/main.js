import { dado } from "./dado.js";
import { selectCol } from "./tabela.js";

const rodar = document.querySelector('#rolar');
const c1 = document.querySelector('#c1');
const c2 = document.querySelector('#c2');
const c3 = document.querySelector('#c3');
const caixadado = document.querySelector('#dado');


const Jl1c1 = document.querySelector('#Jl1c1');
const Jl1c2 = document.querySelector('#Jl1c2');
const Jl1c3 = document.querySelector('#Jl1c3');
const Jl2c1 = document.querySelector('#Jl2c1');
const Jl2c2 = document.querySelector('#Jl2c2');
const Jl2c3 = document.querySelector('#Jl2c3');
const Jl3c1 = document.querySelector('#Jl3c1');
const Jl3c2 = document.querySelector('#Jl3c2');
const Jl3c3 = document.querySelector('#Jl3c3');

const Il1c1 = document.querySelector('#Il1c1');
const Il1c2 = document.querySelector('#Il1c2');
const Il1c3 = document.querySelector('#Il1c3');
const Il2c1 = document.querySelector('#Il2c1');
const Il2c2 = document.querySelector('#Il2c2');
const Il2c3 = document.querySelector('#Il2c3');
const Il3c1 = document.querySelector('#Il3c1');
const Il3c2 = document.querySelector('#Il3c2');
const Il3c3 = document.querySelector('#Il3c3');

rodar.addEventListener('click', turnojogador);

function turnojogador() 
{
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
}

function selectCol2()
{
    selectCol(2, caixadado.innerHTML);
}

function selectCol3()
{
    selectCol(3, caixadado.innerHTML);
}