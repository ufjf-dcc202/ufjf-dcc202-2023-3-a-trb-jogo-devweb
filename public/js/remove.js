import { pontuacaoJogador, pontuacaoadiversario } from "./pontuação.js";



export function jRemover(col, valordado){
    if(col == 1)
    {
        jRemoverCol1(valordado);
    }   
    else if(col == 2)
    {
        jRemoverCol2(valordado);
    }
    else if(col == 3)
    {
        jRemoverCol3(valordado);
    }

    let totalComputador = pontuacaoadiversario();
    ptsAdv.innerHTML = totalComputador;

}

export function iRemover(col, valordado)
{
    if(col == 1)
    {
        iRemoverCol1(valordado);
    }   
    else if(col == 2)
    {
        iRemoverCol2(valordado);
    }
    else if(col == 3)
    {
        iRemoverCol3(valordado);
    }

    let totalJogador = pontuacaoJogador();
    ptsJgdr.innerHTML = totalJogador;
}

function jRemoverCol1(valordado)
{
    if(Il1c1.innerHTML == valordado)
    {
        Il1c1.innerHTML = ""
    }

    if(Il2c1.innerHTML == valordado)
    {
        Il2c1.innerHTML = ""
    }

    if(Il3c1.innerHTML == valordado)
    {
        Il3c1.innerHTML = ""
    }
}

function jRemoverCol2(valordado)
{
    if(Il1c2.innerHTML == valordado)
    {
        Il1c2.innerHTML = ""
    }

    if(Il2c2.innerHTML == valordado)
    {
        Il2c2.innerHTML = ""
    }

    if(Il3c2.innerHTML == valordado)
    {
        Il3c2.innerHTML = ""
    }
}

function jRemoverCol3(valordado)
{
    if(Il1c3.innerHTML == valordado)
    {
        Il1c3.innerHTML = ""
    }

    if(Il2c3.innerHTML == valordado)
    {
        Il2c3.innerHTML = ""
    }

    if(Il3c3.innerHTML == valordado)
    {
        Il3c3.innerHTML = ""
    }
}

function iRemoverCol1(valordado)
{
    if(Jl1c1.innerHTML == valordado)
    {
        Jl1c1.innerHTML = ""
    }

    if(Jl2c1.innerHTML == valordado)
    {
        Jl2c1.innerHTML = ""
    }

    if(Jl3c1.innerHTML == valordado)
    {
        Jl3c1.innerHTML = ""
    }
}

function iRemoverCol2(valordado)
{
    if(Jl1c2.innerHTML == valordado)
    {
        Jl1c2.innerHTML = ""
    }

    if(Jl2c2.innerHTML == valordado)
    {
        Jl2c2.innerHTML = ""
    }

    if(Jl3c2.innerHTML == valordado)
    {
        Jl3c2.innerHTML = ""
    }
}

function iRemoverCol3(valordado)
{
    if(Jl1c3.innerHTML == valordado)
    {
        Jl1c3.innerHTML = ""
    }

    if(Jl2c3.innerHTML == valordado)
    {
        Jl2c3.innerHTML = ""
    }

    if(Jl3c3.innerHTML == valordado)
    {
        Jl3c3.innerHTML = ""
    }
}