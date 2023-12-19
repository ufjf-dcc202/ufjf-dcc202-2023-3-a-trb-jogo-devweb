


export function final()
{
    if(pontuacaoJogador() > pontuacaoadiversario())
    {
        return 0;
    }else if(pontuacaoJogador() < pontuacaoadiversario())
    {
        return 1;
    }else if(pontuacaoJogador() == pontuacaoadiversario())
    {
        return 2;
    }
}

export function pontuacaoJogador(){
    const totalJogador = jCol1() + jCol2() + jCol3();
    return totalJogador;
}

export function pontuacaoadiversario(){
    const totaladiversario = iCol1() + iCol2() + iCol3();
    return totaladiversario;
}

//somatória de pontos do jogador
function Jl1c1()
{
    const elementoJl1c1 = document.querySelector('#Jl1c1');
    const valorJl1c1 = elementoJl1c1.innerHTML;
    const numeroJl1c1 = parseInt(valorJl1c1);
    
    
    if(isNaN(numeroJl1c1))
    {
        return 0;
    }
    return numeroJl1c1;
}

function Jl1c2()
{
    const elementoJl1c2 = document.querySelector('#Jl1c2');
    const valorJl1c2 = elementoJl1c2.innerHTML;
    const numeroJl1c2 = parseInt(valorJl1c2);

    if(isNaN(numeroJl1c2))
    {
        return 0;
    }

    return numeroJl1c2;
}

function Jl1c3()
{
    const elementoJl1c3 = document.querySelector('#Jl1c3');
    const valorJl1c3 = elementoJl1c3.innerHTML;
    const numeroJl1c3 = parseInt(valorJl1c3);

    if(isNaN(numeroJl1c3))
    {
        return 0;
    }

    return numeroJl1c3;
}

function Jl2c1()
{
    const elementoJl2c1 = document.querySelector('#Jl2c1');
    const valorJl2c1 = elementoJl2c1.innerHTML;
    const numeroJl2c1 = parseInt(valorJl2c1);

    if(isNaN(numeroJl2c1))
    {
        return 0;
    }

    return numeroJl2c1;
}

function Jl2c2()
{
    const elementoJl2c2 = document.querySelector('#Jl2c2');
    const valorJl2c2 = elementoJl2c2.innerHTML;
    const numeroJl2c2 = parseInt(valorJl2c2);

    if(isNaN(numeroJl2c2))
    {
        return 0;
    }

    return numeroJl2c2;
}

function Jl2c3()
{
    const elementoJl2c3 = document.querySelector('#Jl2c3');
    const valorJl2c3 = elementoJl2c3.innerHTML;
    const numeroJl2c3 = parseInt(valorJl2c3);

    if(isNaN(numeroJl2c3))
    {
        return 0;
    }

    return numeroJl2c3;
}

function Jl3c1()
{
    const elementoJl3c1 = document.querySelector('#Jl3c1');
    const valorJl3c1 = elementoJl3c1.innerHTML;
    const numeroJl3c1 = parseInt(valorJl3c1);

    if(isNaN(numeroJl3c1))
    {
        return 0;
    }

    return numeroJl3c1;
}

function Jl3c2()
{
    const elementoJl3c2 = document.querySelector('#Jl3c2');
    const valorJl3c2 = elementoJl3c2.innerHTML;
    const numeroJl3c2 = parseInt(valorJl3c2);

    if(isNaN(numeroJl3c2))
    {
        return 0;
    }

    return numeroJl3c2;
}

function Jl3c3()
{
    const elementoJl3c3 = document.querySelector('#Jl3c3');
    const valorJl3c3 = elementoJl3c3.innerHTML;
    const numeroJl3c3 = parseInt(valorJl3c3);

    if(isNaN(numeroJl3c3))
    {
        return 0;
    }

    return numeroJl3c3;
}


//somatória de pontos do adiversário

function Il1c1()
{
    const elementoIl1c1 = document.querySelector('#Il1c1');
    const valorIl1c1 = elementoIl1c1.innerHTML;
    const numeroIl1c1 = parseInt(valorIl1c1);

    if(isNaN(numeroIl1c1))
    {
        return 0;
    }

    return numeroIl1c1;
}

function Il1c2()
{
    const elementoIl1c2 = document.querySelector('#Il1c2');
    const valorIl1c2 = elementoIl1c2.innerHTML;
    const numeroIl1c2 = parseInt(valorIl1c2);

    if(isNaN(numeroIl1c2))
    {
        return 0;
    }

    return numeroIl1c2;
}

function Il1c3()
{
    const elementoIl1c3 = document.querySelector('#Il1c3');
    const valorIl1c3 = elementoIl1c3.innerHTML;
    const numeroIl1c3 = parseInt(valorIl1c3);

    if(isNaN(numeroIl1c3))
    {
        return 0;
    }

    return numeroIl1c3;
}

function Il2c1()
{
    const elementoIl2c1 = document.querySelector('#Il2c1');
    const valorIl2c1 = elementoIl2c1.innerHTML;
    const numeroIl2c1 = parseInt(valorIl2c1);

    if(isNaN(numeroIl2c1))
    {
        return 0;
    }

    return numeroIl2c1;
}

function Il2c2()
{
    const elementoIl2c2 = document.querySelector('#Il2c2');
    const valorIl2c2 = elementoIl2c2.innerHTML;
    const numeroIl2c2 = parseInt(valorIl2c2);

    if(isNaN(numeroIl2c2))
    {
        return 0;
    }

    return numeroIl2c2;
}

function Il2c3()
{
    const elementoIl2c3 = document.querySelector('#Il2c3');
    const valorIl2c3 = elementoIl2c3.innerHTML;
    const numeroIl2c3 = parseInt(valorIl2c3);

    if(isNaN(numeroIl2c3))
    {
        return 0;
    }

    return numeroIl2c3;
}

function Il3c1()
{
    const elementoIl3c1 = document.querySelector('#Il3c1');
    const valorIl3c1 = elementoIl3c1.innerHTML;
    const numeroIl3c1 = parseInt(valorIl3c1);

    if(isNaN(numeroIl3c1))
    {
        return 0;
    }

    return numeroIl3c1;
}

function Il3c2()
{
    const elementoIl3c2 = document.querySelector('#Il3c2');
    const valorIl3c2 = elementoIl3c2.innerHTML;
    const numeroIl3c2 = parseInt(valorIl3c2);

    if(isNaN(numeroIl3c2))
    {
        return 0;
    }

    return numeroIl3c2;
}

function Il3c3()
{
    const elementoIl3c3 = document.querySelector('#Il3c3');
    const valorIl3c3 = elementoIl3c3.innerHTML;
    const numeroIl3c3 = parseInt(valorIl3c3);

    if(isNaN(numeroIl3c3))
    {
        return 0;
    }

    return numeroIl3c3;
}

function jCol1(){

    let multiplicador = 1;

    if(Jl1c1() == Jl2c1() || Jl1c1() == Jl3c1())
    {
        multiplicador++;
        if(Jl1c1() == Jl2c1() && Jl1c1() == Jl3c1())
        {
            multiplicador++;
            return ((Jl1c1() + Jl2c1() + Jl3c1()) * multiplicador);
        }else if (Jl1c1() == Jl2c1())
        {
            return ((Jl1c1() + Jl2c1()) * multiplicador + Jl3c1());
        }else if (Jl1c1() == Jl3c1())
        {
            return ((Jl1c1() + Jl3c1()) * multiplicador + Jl2c1());
        }
    } else if(Jl2c1() == Jl3c1())
    {
        multiplicador++;
        return ((Jl2c1() + Jl3c1()) * multiplicador + Jl1c1());
    }else
    {
        return (Jl1c1() + Jl2c1() + Jl3c1());
    }

}

function jCol2(){

    let multiplicador = 1;

    if(Jl1c2() == Jl2c2() || Jl1c2() == Jl3c2())
    {
        multiplicador++;
        if(Jl1c2() == Jl2c2() && Jl1c2() == Jl3c2())
        {
            multiplicador++;
            return ((Jl1c2() + Jl2c2() + Jl3c2()) * multiplicador);
        }else if (Jl1c2() == Jl2c2())
        {
            return ((Jl1c2() + Jl2c2()) * multiplicador + Jl3c2());
        }else if (Jl1c2() == Jl3c2())
        {
            return ((Jl1c2() + Jl3c2()) * multiplicador + Jl2c2());
        }
    } else if(Jl2c2() == Jl3c2())
    {
        multiplicador++;
        return ((Jl2c2() + Jl3c2()) * multiplicador + Jl1c2());
    }else
    {
        return (Jl1c2() + Jl2c2() + Jl3c2());
    }
}

function jCol3(){

    let multiplicador = 1;

    if(Jl1c3() == Jl2c3() || Jl1c3() == Jl3c3())
    {
        multiplicador++;
        if(Jl1c3() == Jl2c3() && Jl1c3() == Jl3c3())
        {
            multiplicador++;
            return ((Jl1c3() + Jl2c3() + Jl3c3()) * multiplicador);
        }else if (Jl1c3() == Jl2c3())
        {
            return ((Jl1c3() + Jl2c3()) * multiplicador + Jl3c3());
        }else if (Jl1c3() == Jl3c3())
        {
            return ((Jl1c3() + Jl3c3()) * multiplicador + Jl2c3());
        }
    } else if(Jl2c3() == Jl3c3())
    {
        multiplicador++;
        return ((Jl2c3() + Jl3c3()) * multiplicador + Jl1c3());
    }else
    {
        return (Jl1c3() + Jl2c3() + Jl3c3());
    }

}

function iCol1(){

    let multiplicador = 1;

    if(Il1c1() == Il2c1() || Il1c1() == Il3c1())
    {
        multiplicador++;
        if(Il1c1() == Il2c1() && Il1c1() == Il3c1())
        {
            multiplicador++;
            return ((Il1c1() + Il2c1() + Il3c1()) * multiplicador);
        }else if (Il1c1() == Il2c1())
        {
            return ((Il1c1() + Il2c1()) * multiplicador + Il3c1());
        }else if (Il1c1() == Il3c1())
        {
            return ((Il1c1() + Il3c1()) * multiplicador + Il2c1());
        }
    } else if(Il2c1() == Il3c1())
    {
        multiplicador++;
        return ((Il2c1() + Il3c1()) * multiplicador + Il1c1());
    }else
    {
        return (Il1c1() + Il2c1() + Il3c1());
    }

}

function iCol2(){

    let multiplicador = 1;

    if(Il1c2() == Il2c2() || Il1c2() == Il3c2())
    {
        multiplicador++;
        if(Il1c2() == Il2c2() && Il1c2() == Il3c2())
        {
            multiplicador++;
            return ((Il1c2() + Il2c2() + Il3c2()) * multiplicador);
        }else if (Il1c2() == Il2c2())
        {
            return ((Il1c2() + Il2c2()) * multiplicador + Il3c2());
        }else if (Il1c2() == Il3c2())
        {
            return ((Il1c2() + Il3c2()) * multiplicador + Il2c2());
        }
    } else if(Il2c2() == Il3c2())
    {
        multiplicador++;
        return ((Il2c2() + Il3c2()) * multiplicador + Il1c2());
    }else
    {
        return (Il1c2() + Il2c2() + Il3c2());
    }

}

function iCol3(){

    let multiplicador = 1;

    if(Il1c3() == Il2c3() || Il1c3() == Il3c3())
    {
        multiplicador++;
        if(Il1c3() == Il2c3() && Il1c3() == Il3c3())
        {
            multiplicador++;
            return ((Il1c3() + Il2c3() + Il3c3()) * multiplicador);
        }else if (Il1c3() == Il2c3())
        {
            return ((Il1c3() + Il2c3()) * multiplicador + Il3c3());
        }else if (Il1c3() == Il3c3())
        {
            return ((Il1c3() + Il3c3()) * multiplicador + Il2c3());
        }
    } else if(Il2c3() == Il3c3())
    {
        multiplicador++;
        return ((Il2c3() + Il3c3()) * multiplicador + Il1c3());
    }else
    {
        return (Il1c3() + Il2c3() + Il3c3());
    }

}