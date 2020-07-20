let choferes=["Carlos","Mateo","Lucas","Eduardo","Enrique"];
let horas=[[5,6,4,6,7,5],[6,5,6,7,5,6],[4,7,6,7,5,5],[6,5,7,7,5,5],[4,7,5,4,6,5]];
let sueldosporhora=[13,12,15,13,12];

let totalhoras=[];
let sueldosemanal=[];
let sueldoxtrab=0;
let horasxtrab=0;
let horastrabmayor=0;
let totalpagar=0;
let nomtrabajador="";

for (let i = 0; i < choferes.length; i++) 
{
   for (let j = 0; j < horas[i].length ; j++) 
   {     
     
     horasxtrab= horasxtrab + horas[i][j];
     
     if (j==0) 
     {
            if (i===0)
            {
                horastrabmayor=horas[i][j];
                nomtrabajador=choferes[i];
            }
            else {
                if (horastrabmayor<horas[i][j])
                {
                    horastrabmayor=horas[i][j];
                    nomtrabajador=choferes[i];
                }     
            }
     }


   }
     

     sueldoxtrab=horasxtrab*sueldosporhora[i];
     totalpagar=sueldoxtrab+totalpagar;
     totalhoras.splice(i,0,horasxtrab);
     sueldosemanal.splice(i,0,sueldoxtrab);
     sueldoxtrab=0;
     horasxtrab=0;
       
     console.log(`Trabajador: ${choferes[i]} Horas Trabajadas: ${totalhoras[i]}  Sueldo Semanal: ${sueldosemanal[i]}`);

 }

    console.log(`La empresa pagará ${totalpagar}`);
    console.log(` El trabajador que labora mas horas es: ${nomtrabajador}`);
