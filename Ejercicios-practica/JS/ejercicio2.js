// Ejercicio 2 Calcular Promedio
// Escribir una función que tome un array de números y calcule el promedio.

let numeros = [5, 10, 15, 20, 25]; //Arreglo
let suma = 0; //Variable

for (let i = 0; i < numeros.length; i++) { //// Usar for para recorrer el array y sumar los números
    suma += numeros[i];  // Añade el valor de cada número a la variable suma
    
}
let promedio = suma / numeros.length; // Calculamos el promedio dividiendo la suma entre la cantidad de números

console.log("El promedio es: " + promedio); //// Imprimir el resultado
