import { iSelectCol } from "./adiversario.js";
import { dado } from "./dado.js";
import { final, pontuacaoJogador, pontuacaoadiversario } from "./pontuação.js";
import { podecol1, podecol2, podecol3, selectCol } from "./tabela.js";

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
    Icaixadado.innerHTML = valorAtual;

    setTimeout(function(){
        iSelectCol(valorAtual);
        Icaixadado.innerHTML = '';
    
        totalComputador = pontuacaoadiversario();
        ptsAdv.innerHTML = totalComputador;
    
        rodar.addEventListener('click', turnojogador);
    }, 1000);
}

function selectCol1()
{
    const pode = podecol1();
    if(pode){
        selectCol(1, Jcaixadado.innerHTML);
        Jcaixadado.innerHTML = '';

        totalJogador = pontuacaoJogador();
        ptsJgdr.innerHTML = totalJogador;

        
        turnocomputador();
    } 
}

function selectCol2()
{
    const pode = podecol2();
    if(pode){
        selectCol(2, Jcaixadado.innerHTML);
        Jcaixadado.innerHTML = '';
    
        totalJogador = pontuacaoJogador();
        ptsJgdr.innerHTML = totalJogador;
    
        turnocomputador();
    }
}

function selectCol3()
{
    const pode = podecol3();
    if(pode){
        selectCol(3, Jcaixadado.innerHTML);
        Jcaixadado.innerHTML = '';
    
        totalJogador = pontuacaoJogador();
        ptsJgdr.innerHTML = totalJogador;
    
        turnocomputador();
    }
}