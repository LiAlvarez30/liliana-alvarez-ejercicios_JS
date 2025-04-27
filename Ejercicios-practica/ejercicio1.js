//Ejercicio 1 Filtrar Números Pares
// Crear una función que reciba un array con números del 0 al 10, y devuelva un nuevo array que contenga solo los números pares.

function filtrarNumerosPares(array) { //Creo la funcion
    return array.filter(num => num % 2 === 0); //Retorno y filtro el array, utilizo la funcion flecha
}
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //Creo el arreglo(ARRAY)
console.log(filtrarNumerosPares(numeros));  //le pido llamar a la funcion