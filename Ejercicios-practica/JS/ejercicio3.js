// Ejercicio 3 Imprimir con Retraso
// Usar una función flecha y setTimeout para imprimir cada elemento de un array con un retraso de 1 segundo por elemento.


const frutas = ["Manzana", "Banana", "Papaya", "Frutilla"]; //Crear el array

frutas.forEach((frutas, index) => { // Usamos forEach para recorrer el array
  setTimeout(() => { // Con setTimeout imprimimos cada elemento con un retraso de 1 segundo por posición
    console.log(frutas);
  }, 1000 * index); // 1 segundo multiplicado por el índice
});
