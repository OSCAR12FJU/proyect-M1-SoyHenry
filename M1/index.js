const obtenerInformacion = () =>{
    let nombreActividad = document.getElementById("nombre-actividad").value;
    let descripcion = document.getElementById("descripcion").value;
    let linkImagen = document.getElementById("link-img").value;

    let activContainer = document.createElement('div');
    activContainer.className= 'activ-contain';
    let actividadIiner = document.createElement('div');
    actividadIiner.className= 'actividad-inner';
    
    let nombreActiv = document.createElement('h3');
    nombreActiv.textContent = nombreActividad;
    let imagenActiv = document.createElement('img')
    imagenActiv.src = linkImagen;
    let descripActiv = document.createElement('p');
    descripActiv.textContent = descripcion;
    
    actividadIiner.appendChild(nombreActiv);
    actividadIiner.appendChild(imagenActiv);
    actividadIiner.appendChild(descripActiv);

    activContainer.appendChild(actividadIiner);

    document.getElementById("actividadContainer").appendChild(activContainer);

    document.getElementById("nombre-actividad").value ='';
    document.getElementById("descripcion").value = '';
    document.getElementById("link-img").value = '';
}
