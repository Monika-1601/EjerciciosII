let vector1=["a","b","c"];
let vector2=[];


for (let i =vector1.length-1; i >=0  ; i--) 
{
      if (i===2)
      {
          vector2.splice(0,0,vector1[i]);
      }
      else if(i===1)
      {
          vector2.splice(2,0,vector1[i]);
      }
      else if(i===0)
      {
          vector2.splice(1,0,vector1[i]);
      }
    
}

console.log(vector2);