// Desarrollador 2 Luis Mendez
function suma(a, b) { 
    return a + b; 
} 

// Desarrollador 3 Brandon Loria
function resta(a, b) {
    return a - b;
}

// Desarrollador 1 Jenny Gong
function multiplicacion (a, b){ 
    return a * b; 
} 

// Desarrollador 4 Fernando Chacon
function division(a, b) { 

    return a / b; 

} 

//Desarrollador 1 Jenny Gong
function potencia(base, exponente){
    return Math.pow(base,exponente);
}


// Desarrollador 2 
function raizCuadrada(n) { 
    return Math.sqrt(n); 
} 

// Desarrollador 4 Fernando Chacon
function porcentaje(n, porcentaje) { 

    return (n * porcentaje) / 100; 

} 

// Desarrollador 1 Jenny Gong
function promedio(numeros){
    let suma = 0;
    for (let i=0;i< numeros.length; i++){
        suma +=numeros [i];}
    return suma / numeros.length;
}

// Desarrollador 4 Fernando Chacon
function factorial(n) { 

    let resultado = 1; 

    for (let i = 1; i <= n; i++) { 

        resultado *= i; 

    } 

    return resultado; 

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

// Desarrollador 1 Jenny Gong
console.log(porcentaje(100,2));
console.log(promedio([2, 3, 5, 7, 11]));

// Desarrollador 3 Brandon Loria

console.log(factorial(5));

console.log(maximo([2, 3, 5, 7, 11]));

// Desarrollador 4 Fernando Chacon
console.log(minimo([2, 3, 5, 7, 11]));


