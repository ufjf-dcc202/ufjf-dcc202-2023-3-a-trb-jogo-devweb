import { final } from "./pontuação.js";
import { iRemover } from "./remove.js";



export function iSelectCol(valordado){
    const teste1 = selectByDelete(valordado);
    if(teste1)
    {
        return;
    }
    const teste2 = selectByInsert(valordado);
    if(teste2)
    {
        return;
    }
    randomSelect(valordado);
}

function selectByDelete(valordado){
    if(Jl3c1.innerHTML == valordado)
    {
        const teste1 = iSelectCol1(valordado);
        if(teste1)
        {
            return true;
        }
        
    }else if(Jl2c1.innerHTML == valordado)
    {
        const teste2 = iSelectCol1(valordado);
        if(teste2)
        {
            return true;
        }
        
    }else if(Jl1c1.innerHTML == valordado)
    {
        const teste3 = iSelectCol1(valordado);
        if(teste3)
        {
            return true;
        }
        
    }else if(Jl3c2.innerHTML == valordado)
    {
        const teste4 = iSelectCol2(valordado);
        if(teste4)
        {
            return true;
        }
      
    }else if(Jl2c2.innerHTML == valordado)
    {
        const teste5 = iSelectCol2(valordado);
        if(teste5)
        {
            return true;
        }
      
    }else if(Jl1c2.innerHTML == valordado)
    {
        const teste6 = iSelectCol2(valordado);
        if(teste6)
        {
            return true;
        }
     
    }else if(Jl3c3.innerHTML == valordado)
    {
        const teste7 = iSelectCol3(valordado);
        if(teste7)
        {
            return true;
        }
      
    }else if(Jl2c3.innerHTML == valordado)
    {
        const teste8 = iSelectCol3(valordado);
        if(teste8)
        {
            return true;
        }
        
    }else if(Jl1c3.innerHTML == valordado)
    {
        const teste9 = iSelectCol3(valordado);
        if(teste9)
        {
            return true;
        }

    }

    return false;
}

function selectByInsert(valordado){
    if(Il3c1.innerHTML == valordado)
    {
        const teste1 = iSelectCol1(valordado);
        if(teste1)
        {
            return true;
        }

    }else if(Il2c1.innerHTML == valordado)
    {
        const teste2 = iSelectCol1(valordado);
        if(teste2)
        {
            return true;
        }

    }else if(Il1c1.innerHTML == valordado)
    {
        const teste3 = iSelectCol1(valordado);
        if(teste3)
        {
            return true;
        }

    }else if(Il3c2.innerHTML == valordado)
    {
        const teste4 = iSelectCol2(valordado);
        if(teste4)
        {
            return true;
        }
        
    }else if(Il2c2.innerHTML == valordado)
    {
        const teste5 = iSelectCol2(valordado);
        if(teste5)
        {
            return true;
        }

    }else if(Il1c2.innerHTML == valordado)
    {
        const teste6 = iSelectCol2(valordado);
        if(teste6)
        {
            return true;
        }

    }else if(Il3c3.innerHTML == valordado)
    {
        const teste7 = iSelectCol3(valordado);
        if(teste7)
        {
            return true;
        }

    }else if(Il2c3.innerHTML == valordado)
    {
        const teste8 = iSelectCol3(valordado);
        if(teste8)
        {
            return true;
        }

    }else if(Il1c3.innerHTML == valordado)
    {
        const teste9 = iSelectCol3(valordado);
        if(teste9)
        {
            return true;
        }

    }

    return false;
}

function randomSelect(valordado){

    const col = Math.floor(Math.random() * 3) + 1;
    if(col == 1)
    {
        const teste1 = iSelectCol1(valordado);
        if(teste1)
        {
            return;
        }else{
            randomSelect(valordado);
        }

    }else if(col == 2)
    {
        const teste2 = iSelectCol2(valordado);
        if(teste2)
        {
            return;
        }else{
            randomSelect(valordado);
        }

    }else if(col == 3)
    {
        const teste3 = iSelectCol3(valordado);
        if(teste3)
        {
            return;
        }else{
            randomSelect(valordado);
        }
    }

}

function iSelectCol1(valorAtual){
    if(Il3c1.innerHTML === '')
    {
        Il3c1.innerHTML = valorAtual;
        
    }else if(Il2c1.innerHTML == '')
    {
        Il2c1.innerHTML = valorAtual;
        
    }else if(Il1c1.innerHTML == '')
    {
        Il1c1.innerHTML = valorAtual;
        
    }else
    {
        return false;
    }

    iRemover(1, valorAtual);
    setTimeout(function(){  
        iCheio();
    }, 1000);
    return true;
}

function iSelectCol2(valorAtual){
    if(Il3c2.innerHTML === '')
    {
        Il3c2.innerHTML = valorAtual;
        
    }else if(Il2c2.innerHTML == '')
    {
        Il2c2.innerHTML = valorAtual;
        
    }else if(Il1c2.innerHTML == '')
    {
        Il1c2.innerHTML = valorAtual;
        
    }else
    {
        return false;
    }

    iRemover(2, valorAtual);
    setTimeout(function(){
        iCheio();
    }, 1000);
    return true;
}

function iSelectCol3(valorAtual){
    if(Il3c3.innerHTML === '')
    {
        Il3c3.innerHTML = valorAtual;
        
    }else if(Il2c3.innerHTML == '')
    {
        Il2c3.innerHTML = valorAtual;
        
    }else if(Il1c3.innerHTML == '')
    {
        Il1c3.innerHTML = valorAtual;
        
    }else
    {
        return false;
    }

    iRemover(3, valorAtual);
    setTimeout(function(){
        iCheio();
    }, 1000);
    return true;
}

function iCheio()
{
    if(Col1Cheia() && Col2Cheia() && Col3Cheia())
    {
        const vencedor = final();
        if(vencedor == 0)
        {
            alert('Você ganhou!');
            location.reload();
        }else if(vencedor == 1)
        {
            alert('O adversário ganhou!');
            location.reload();
        }else if(vencedor == 3)
        {
            alert('Empate!');
            location.reload();
        }
    }
}

function Col1Cheia()
{
    if(Il3c1.innerHTML != '' && Il2c1.innerHTML != '' && Il1c1.innerHTML != '')
    {
        return true;
    }
}

function Col2Cheia()
{
    if(Il3c2.innerHTML != '' && Il2c2.innerHTML != '' && Il1c2.innerHTML != '')
    {
        return true;
    }
}

function Col3Cheia()
{
    if(Il3c3.innerHTML != '' && Il2c3.innerHTML != '' && Il1c3.innerHTML != '')
    {
        return true;
    }
}