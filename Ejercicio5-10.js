let vector1=[5,6,8,9,11,20,15,12,3,10];
let vector2=[9,15,20,14,13,8,17,16,20,17];
let suma=[];

let sumatemp=0;

for (let i = 0; i < vector1.length; i++) 
{
       sumatemp=vector1[i]+vector2[i];
       suma.splice(i,0,sumatemp);
       
       console.log(`Posicion ${i} elemento 1: ${vector1[i]}  elemento 2: ${vector2[i]}  suma: ${sumatemp}`);
}
console.log(suma);
