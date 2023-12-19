


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
        iSelectCol1(valordado);
        return true;
    }else if(Jl2c1.innerHTML == valordado)
    {
        iSelectCol1(valordado);
        return true;
    }else if(Jl1c1.innerHTML == valordado)
    {
        iSelectCol1(valordado);
        return true;
    }else if(Jl3c2.innerHTML == valordado)
    {
      iSelectCol2(valordado);
      return true;
    }else if(Jl2c2.innerHTML == valordado)
    {
      iSelectCol2(valordado);
      return true;
    }else if(Jl1c2.innerHTML == valordado)
    {
      iSelectCol2(valordado);
      return true;
    }else if(Jl3c3.innerHTML == valordado)
    {
      iSelectCol3(valordado);
      return true;
    }else if(Jl2c3.innerHTML == valordado)
    {
        iSelectCol3(valordado);
        return true;
    }else if(Jl1c3.innerHTML == valordado)
    {
        iSelectCol3(valordado);
        return true;
    }

    return false;
}

function selectByInsert(valordado){
    if(Il3c1.innerHTML == valordado)
    {
        iSelectCol1(valordado);
        return true;
    }else if(Il2c1.innerHTML == valordado)
    {
        iSelectCol1(valordado);
        return true;
    }else if(Il1c1.innerHTML == valordado)
    {
        iSelectCol1(valordado);
        return true;
    }else if(Il3c2.innerHTML == valordado)
    {
      iSelectCol2(valordado);
      return true;
    }else if(Il2c2.innerHTML == valordado)
    {
      iSelectCol2(valordado);
      return true;
    }else if(Il1c2.innerHTML == valordado)
    {
      iSelectCol2(valordado);
      return true;
    }else if(Il3c3.innerHTML == valordado)
    {
      iSelectCol3(valordado);
      return true;
    }else if(Il2c3.innerHTML == valordado)
    {
        iSelectCol3(valordado);
        return true;
    }else if(Il1c3.innerHTML == valordado)
    {
        iSelectCol3(valordado);
        return true;
    }

    return false;
}

function randomSelect(valordado){
    const col = Math.floor(Math.random() * 3) + 1;
    if(col == 1)
    {
        iSelectCol1(valordado);
        return;
    }else if(col == 2)
    {
        iSelectCol2(valordado);
        return;
    }else if(col == 3)
    {
        iSelectCol3(valordado);
        return;
    }
}

function iSelectCol1(valorAtual){
    if(Il3c1.innerHTML === '')
        {
            Il3c1.innerHTML = valorAtual;
            return;
        }else if(Il2c1.innerHTML == '')
        {
            Il2c1.innerHTML = valorAtual;
            return;
        }else if(Il1c1.innerHTML == '')
        {
            Il1c1.innerHTML = valorAtual;
            return;
        }
}

function iSelectCol2(valorAtual){
    if(Il3c2.innerHTML === '')
        {
            Il3c2.innerHTML = valorAtual;
            return;
        }else if(Il2c2.innerHTML == '')
        {
            Il2c2.innerHTML = valorAtual;
            return;
        }else if(Il1c2.innerHTML == '')
        {
            Il1c2.innerHTML = valorAtual;
            return;
        }
}

function iSelectCol3(valorAtual){
    if(Il3c3.innerHTML === '')
        {
            Il3c3.innerHTML = valorAtual;
            return;
        }else if(Il2c3.innerHTML == '')
        {
            Il2c3.innerHTML = valorAtual;
            return;
        }else if(Il1c3.innerHTML == '')
        {
            Il1c3.innerHTML = valorAtual;
            return;
        }
}