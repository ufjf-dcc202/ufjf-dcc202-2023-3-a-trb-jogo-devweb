

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
