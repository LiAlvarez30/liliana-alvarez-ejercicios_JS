const botonAgregar = document.getElementById('agregarElemento'); // Variables para obtener el botón y la lista
const lista = document.getElementById('lista');

let contador = 1; // Contador para los elementos

function agregarElemento() { // Función para agregar un nuevo elemento a la lista
    const nuevoElemento = document.createElement('li');
    nuevoElemento.textContent = `Elemento ${contador}`;
    lista.appendChild(nuevoElemento);
    contador++;
}

botonAgregar.addEventListener('click', agregarElemento);// Agregar evento de clic al botón

