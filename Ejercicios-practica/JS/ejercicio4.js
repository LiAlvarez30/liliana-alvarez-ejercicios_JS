// Ejercicio 4 Operación con Callback
// Crear una función que reciba un callback y dos números, aplique el callback y devuelva el resultado. Implementar al menos dos callbacks diferentes. 

const sumar = (a, b) => a + b; //Callback Suma
const multiplicar = (a, b) => a * b; // Callback Multiplicación

const operar = (num1, num2, callback) => { // Función que recibe un callback y dos números
    return callback(num1, num2); // Aplicar el callback
};

const resultadoSuma = operar(20, 3, sumar);  // Suma 1er callback
const resultadoMultiplicacion = operar(20, 3, multiplicar);  // Multiplicación 2do callback


console.log("Resultado de la suma:", resultadoSuma); //Mostrar resultado en la consola
console.log("Resultado de la multiplicación:", resultadoMultiplicacion);  
