


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
        return true;
    }else if(Il2c1.innerHTML == '')
    {
        Il2c1.innerHTML = valorAtual;
        return true;
    }else if(Il1c1.innerHTML == '')
    {
        Il1c1.innerHTML = valorAtual;
        return true;
    }else
    {
        return false;
    }
}

function iSelectCol2(valorAtual){
    if(Il3c2.innerHTML === '')
    {
        Il3c2.innerHTML = valorAtual;
        return true;
    }else if(Il2c2.innerHTML == '')
    {
        Il2c2.innerHTML = valorAtual;
        return true;
    }else if(Il1c2.innerHTML == '')
    {
        Il1c2.innerHTML = valorAtual;
        return true;
    }else
    {
        return false;
    }
}

function iSelectCol3(valorAtual){
    if(Il3c3.innerHTML === '')
    {
        Il3c3.innerHTML = valorAtual;
        return true;
    }else if(Il2c3.innerHTML == '')
    {
        Il2c3.innerHTML = valorAtual;
        return true;
    }else if(Il1c3.innerHTML == '')
    {
        Il1c3.innerHTML = valorAtual;
        return true;
    }else
    {
        return false;
    }
}

export function iCheio()
{
    if(!iSelectCol1(valordado) && !iSelectCol2(valordado) && !iSelectCol3(valordado))
    {
        return true;
    }
}