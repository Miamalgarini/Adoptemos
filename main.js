var cad=` 
<div class="container">
`

    for(let i=0; i< datos.length; i++){
      cad +=
`<div class="Tarjeta">
<img src="${datos[i].image}" alt="foto">
<h4>Nombre: ${datos[i].name}</h4>
<p>Género:${datos[i].gender}</p>
<p>Especie:${datos[i].species}</p>
</div>
`
}


cad+=`
</div>
`
document.write(cad)