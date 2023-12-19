

import { final } from "./pontuação.js";
import { jRemover } from "./remove.js";

export function selectCol(col, valorAtual)
{
   if(col == 1)
   {
        if(Jl3c1.innerHTML === '')
        {
            Jl3c1.innerHTML = valorAtual;

        }else if(Jl2c1.innerHTML == '')
        {
            Jl2c1.innerHTML = valorAtual;

        }else if(Jl1c1.innerHTML == '')
        {
            Jl1c1.innerHTML = valorAtual;
        
        }       
        jRemover(col, valorAtual);
        jCheio();
        return
   }

    if(col == 2)
    {
        if(Jl3c2.innerHTML === '')
        {
        Jl3c2.innerHTML = valorAtual;
        
        }else if(Jl2c2.innerHTML == '')
        {
        Jl2c2.innerHTML = valorAtual;
        
        }else if(Jl1c2.innerHTML == '')
        {
        Jl1c2.innerHTML = valorAtual;
        
        }
        jRemover(col, valorAtual);
        jCheio();
        return;
    }

    if(col == 3)
    {
        if(Jl3c3.innerHTML === '')
        {
          Jl3c3.innerHTML = valorAtual;
          
        }else if(Jl2c3.innerHTML == '')
        {
          Jl2c3.innerHTML = valorAtual;
          
        }else if(Jl1c3.innerHTML == '')
        {
          Jl1c3.innerHTML = valorAtual;
          
        }

        jRemover(col, valorAtual);
        jCheio();
        return;
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

function jCheio(){
    if(!podecol1() && !podecol2() && !podecol3())
    {
        const vencedor = final();
        if(vencedor == 0)
        {
            alert('Você ganhou!');
        }else if(vencedor == 1)
        {
            alert('O adversário ganhou!');
        }else if(vencedor == 3)
        {
            alert('Empate!');
        }
    }
}