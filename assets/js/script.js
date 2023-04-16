//obtener elementos de la tabla
var tabla=document.getElementById("tabla");
var contenido=document.getElementById("contenido");
var carta=document.getElementById("carta");
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
      
}}
//para mostrar en la sectiob id carta
 function mostrarCarta(){
let busqueda = document.getElementById("busqueda").value.toLowerCase();
let tabla = document.getElementById("tabla")
let contenido = document.getElementById("contenido");
if (tabla != null && contenido != null){
 tabla.style.display = "none"
contenido.style.display ="none"

}
    fetch(`https://digimon-api.vercel.app/api/digimon/name/${busqueda}`)
    .then(response=>response.json())
    .then(datos=>{
        console.log(datos);
        construirCarta(datos)
    })}

    function construirCarta(param){
 /*  document.getElementById("tabla").style.display="none";
     document.getElementById("contenido").style.display="none"; */
       tabla.innerHTML=""
       contenido.innerHTML=""
       carta.innerHTML=""
       for(let temp of param){
     
        carta.innerHTML+=
        ` <div class="card col-6 mx-auto" style="width:18rem">
        <img src="${temp.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${temp.name}</h5>
          <p class="card-text">${temp.level}</p>
        </div>`
       }
    
    }
