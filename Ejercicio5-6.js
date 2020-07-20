
let alumnos=["juan","pedro","mariana","karla","lucia","carlos","karina","elena","luciana","marco"];
let edades=[20,25,23,22,19,21,23,24,19,23];

let alumnomayor="";
let edadmayor=0;


for (let i = 0; i < alumnos.length; i++) {
          
   if (i===0){     
    alumnomayor=alumnos[i];
    edadmayor=edades[i];
   } 
   else
   {
     if (edades[i]>edadmayor)
      {   
        alumnomayor=alumnos[i];
        edadmayor=edades[i];
      }
   }  
    console.log(`Posicion ${i}  alumno: ${alumnos[i]} edad: ${edades[i]} `)
       
}

window.alert(`El alumno ${alumnomayor} tiene ${edadmayor}, es el de mayor edad. `);

