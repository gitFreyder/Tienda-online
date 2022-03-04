//eventos en algunos componentes mostrar imagen

const modalImagen = document.querySelector('#modal-imagen');

modalImagen.addEventListener('show.bs.modal', function(e){
    // console.log('mostrando modal');
    // console.log(e.relatedTarget);
    const enlace = e.relatedTarget;
    const rutImagen = enlace.getAttribute('data-bs-imagen');
    console.log(rutImagen);

    //construir imagen
    const imagen = document.createElement('IMG');
    imagen.src = `images/${rutImagen}.jpeg`;
    imagen.classList.add('img-fluid');
    imagen.alt = 'Imagen Galeria';

    //seleccionar el modal body
    const contenidoModal = document.querySelector('.modal-body');

    //asignar imagen
    contenidoModal.appendChild(imagen);
    
});


//para cerrar el modal limpiarlo
modalImagen.addEventListener('hidden.bs.modal',function(){
    const contenidoModal = document.querySelector('.modal-body');
    contenidoModal.textContent = '';

});