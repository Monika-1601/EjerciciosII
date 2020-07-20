

let notas=[15,13,14,18,12,16,17,18,14,13,15,12,11,15,16];

let acumsuma=0;
let promedionota=0;
let cantalumprom=0;


for (let i = 0; i < notas.length; i++) {
    acumsuma=notas[i]+acumsuma ;    
}

    promedionota=acumsuma/15;

  for (let i = 0; i < notas.length; i++) {

    console.log(`Posicion ${i}  Promedio= ${promedionota}   Nota=${notas[i]}`);
    if (notas[i]>promedionota)
    { 
        cantalumprom+=1;
      
    }
   }  

console.log(`La sumatoria de notas es ${acumsuma}, el promedio de notas es ${promedionota}, la cantidad alumnos superan el promedio ${cantalumprom}`);
 
window.alert(`El promedio de notas es ${promedionota} y la cantidad mayor al promedio es ${cantalumprom}`);
