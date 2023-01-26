// Desarrollador 2 Luis Mendez
function suma(a, b) { 
    return a + b; 
} 

// Desarrollador 3 Brandon Loria
function resta(a, b) {
    return a - b;
}

// Desarrollador 2 
function raizCuadrada(n) { 
    return Math.sqrt(n); 
} 

// Desarrollador 3 Brandon Loria
function maximo(numeros) {
    let max = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > max) {
            max = numeros[i];
        }
    }
    return max;
}

/ Desarrollador 2 
function minimo(numeros) { 
    let min = numeros[0]; 
    for (let i = 1; i < numeros.length; i++) { 
        if (numeros[i] < min) { 
            min = numeros[i]; 
        } 
    } 
    return min; 
} 
// Desarrollador 3 Brandon Loria

console.log(suma(2, 3)); 

console.log(resta(5, 3)); 

console.log(multiplicacion(2, 3));

// Desarrollador 2 
 
console.log(division(6, 3)); 
 
console.log(potencia(2, 3)); 
 
console.log(raizCuadrada(9));

// Desarrollador 3 Brandon Loria

console.log(factorial(5));

console.log(maximo([2, 3, 5, 7, 11]));






