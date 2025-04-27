let contador = 0; // InicializAR el contador en 0

const divContador = document.getElementById('contador');
const botonIncrementar = document.getElementById('incrementar'); // Obtener los elementos HTML
const botonDecrementar = document.getElementById('decrementar');

function actualizarContador() { // Función para actualizar el contador en el div
    divContador.textContent = contador;
}

botonIncrementar.addEventListener('click', () => { // Función para actualizar el contador en el div
    contador++;
    actualizarContador();
});


botonDecrementar.addEventListener('click', () => { // Agregar evento para decrementar
    contador--;
    actualizarContador();
});



