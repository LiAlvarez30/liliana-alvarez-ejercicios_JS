// Ejercicio 2 Calcular Promedio
// Escribir una función que tome un array de números y calcule el promedio.


// ejercicio2.js

// Array con números
const numeros = [10, 20, 30, 40, 50];

// Función para calcular el promedio con forEach
function calcularPromedio(arr) {
    let suma = 0;
    
    arr.forEach(num => {
        suma += num; // Sumar cada número con forEach
    });
    
    return suma / arr.length; // Dividir la suma entre la cantidad de números
}

// Imprimir el promedio
console.log("El promedio es:", calcularPromedio(numeros));



// Paso 1: Crear un array con algunos números
let numeros = [5, 10, 15, 20, 25];  // Array con 5 números

// Paso 2: Crear una función para calcular la suma de los números
function calcularSuma(arr) {
  let suma = 0;  // Variable para guardar la suma total

  // Recorrer el array con un ciclo for
  for (let i = 0; i < arr.length; i++) {
    suma += arr[i];  // Sumar cada número al total
  }

  return suma;  // Retornar la suma total
}

// Paso 3: Calcular el promedio
function calcularPromedio(arr) {
  let sumaTotal = calcularSuma(arr);  // Llamamos a la función para obtener la suma
  let promedio = sumaTotal / arr.length;  // Promedio = suma / cantidad de elementos
  return promedio;  // Retornar el promedio
}

// Paso 4: Mostrar el resultado en la consola
console.log("El promedio de los números es:", calcularPromedio(numeros));
