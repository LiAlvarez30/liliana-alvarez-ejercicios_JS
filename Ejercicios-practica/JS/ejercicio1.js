//Ejercicio 1 Filtrar Números Pares
// Crear una función que reciba un array con números del 0 al 10, y devuelva un nuevo array que contenga solo los números pares.


let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numerosPares = numeros.filter(function(numero) { //Filtrar los números pares
  return numero % 2 === 0; //Si el numero se divide en dos sera par 
});
console.log(numerosPares); //Mostrar el resultado en la consola

