const botonAgregar = document.getElementById('agregarElemento'); 
const lista = document.getElementById('lista');

let contador = 1; //Contador para los elementos, aun asi estos sean eliminados el continua aumentando

function agregarElemento() { //crear la funcion la para agregar un nuevo elementos en la lista
    const nuevoElemento = document.createElement('li'); // Creamos el nuevo listar
    nuevoElemento.textContent = `Elemento ${contador}`; // Texto con número

    const botonEliminar = document.createElement('button'); // Crear el botón para eliminar
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.style.marginLeft = '10px'; // Separar el botón del texto
    botonEliminar.style.backgroundColor = '#f44336'; // Botón rojo
    botonEliminar.style.border = 'none';
    botonEliminar.style.color = 'white';
    botonEliminar.style.padding = '5px 10px';
    botonEliminar.style.borderRadius = '5px';
    botonEliminar.style.cursor = 'pointer';
    botonEliminar.style.fontSize = '0.9em';

    botonEliminar.addEventListener('click', () => {  //Agregamos funcion para que el boton eliminar actue
        lista.removeChild(nuevoElemento);
    });

    nuevoElemento.appendChild(botonEliminar); //Insertamos el botón dentro del elemento lista

    lista.appendChild(nuevoElemento);  //Agregamos el nuevo elemento a la lista
    contador++; // Incrementamos el contador
}

botonAgregar.addEventListener('click', agregarElemento); //Agregar evento de clic al botón principal
