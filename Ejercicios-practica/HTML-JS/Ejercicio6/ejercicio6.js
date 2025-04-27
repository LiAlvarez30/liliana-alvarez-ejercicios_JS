const parrafos = document.querySelectorAll('p'); // Obtener todos los elementos <p> de la página
const boton = document.getElementById('cambiarTexto'); // Obtener el botón

boton.addEventListener('click', function() { // Agregar evento de clic al botón
   parrafos.forEach(parrafo => {  // Cambiar el texto de todos los párrafos
        parrafo.textContent = "Este párrafo ha sido cambiado después de hacer clic en el botón.";
        parrafo.style.color = "#FF5733"; // Cambiar el color de la letra
        parrafo.style.fontSize = "22px"; // Cambiar el tamaño de la letra
        parrafo.style.fontFamily = "Courier New, Courier, monospace"; // Cambiar el tipo de letra
    });
});
