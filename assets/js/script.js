//obtener elementos de la tabla
var tabla=document.getElementById("tabla");
var contenido=document.getElementById("contenido");
//consumo de api con fetch
console.log(tabla);
console.log(contenido);

fetch('https://digimon-api.vercel.app/api/digimon')
.then(response=>response.json())
.then(datos=>{
    console.log(datos);
    mostrarTabla(datos)
})

//funcion para obtener los datos del digimon
function mostrarTabla(data){
   //limpiar elemento con id contenido
   contenido.innerHTML="";
   //recorrer datos del digimon
   for(let temp of data){
    contenido.innerHTML+=
    `<td><img src="${temp.img}" width="60" height="60" alt="foto"></td>
    <td>${temp.name}</td>
    <td>${temp.level}</td>`
      
   }

}