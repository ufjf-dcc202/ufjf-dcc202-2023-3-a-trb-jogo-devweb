

export function selectCol(col, valorAtual)
{
   if(col == 1)
   {
        if(Jl3c1.innerHTML === '')
        {
            Jl3c1.innerHTML = valorAtual;
            return;
        }else if(Jl2c1.innerHTML == '')
        {
            Jl2c1.innerHTML = valorAtual;
            return;
        }else if(Jl1c1.innerHTML == '')
        {
            Jl1c1.innerHTML = valorAtual;
            return;
        }
   }

    if(col == 2)
    {
          if(Jl3c2.innerHTML === '')
          {
            Jl3c2.innerHTML = valorAtual;
            return;
          }else if(Jl2c2.innerHTML == '')
          {
            Jl2c2.innerHTML = valorAtual;
            return;
          }else if(Jl1c2.innerHTML == '')
          {
            Jl1c2.innerHTML = valorAtual;
            return;
          }
    }

    if(col == 3)
    {
          if(Jl3c3.innerHTML === '')
          {
            Jl3c3.innerHTML = valorAtual;
            return;
          }else if(Jl2c3.innerHTML == '')
          {
            Jl2c3.innerHTML = valorAtual;
            return;
          }else if(Jl1c3.innerHTML == '')
          {
            Jl1c3.innerHTML = valorAtual;
            return;
          }
    }
}

export function podecol1(){
    if(Jl1c1.innerHTML === '' || Jl2c1.innerHTML === '' || Jl3c1.innerHTML === '')
    {
        return true;
    }else
    {
        return false;
    }  
}

export function podecol2(){
    if(Jl1c2.innerHTML === '' || Jl2c2.innerHTML === '' || Jl3c2.innerHTML === '')
    {
        return true;
    }else
    {
        return false;
    }  
}
export function podecol3(){
    if(Jl1c3.innerHTML === '' || Jl2c3.innerHTML === '' || Jl3c3.innerHTML === '')
    {
        return true;
    }else
    {
        return false;
    }  
}

export function jCheio(){
    if(!podecol1() && !podecol2() && !podecol3())
    {
        return true;
    }
}