// Desarrollador 2 Luis Mendez
function suma(a, b) { 
    return a + b; 
} 

// Desarrollador 2 
function raizCuadrada(n) { 
    return Math.sqrt(n); 
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
// Desarrollador 2 
 
console.log(division(6, 3)); 
 
console.log(potencia(2, 3)); 
 
console.log(raizCuadrada(9)); 

// Desarrollador 2 
function imprimirFrutas() { 
    console.log(frutas); 
} 
/ Desarrollador 2 
function eliminarFruta(fruta) { 
    let index = frutas.indexOf(fruta); 
    if (index > -1) { 
        frutas.splice(index, 1); 
    } 
} 

