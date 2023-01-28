// Desarrollador 1 Jenny Gong

let frutas = ["manzana", "plátano", "pera", "mango"]; 

// Desarrollador 2 Luis Méndez B.

function imprimirFrutas() {
    console.log(frutas);
}


// Desarrollador 3 Brandon Loria
function agregarFruta(fruta) {
    frutas.push(fruta);
}

// Desarrollador 2 Luis Méndez B.
function eliminarFruta(fruta) {
    let index = frutas.indexOf(fruta);
    if (index > -1) {
        frutas.splice(index, 1);
    }
}

// Desarrollador 4 Fernando Chacon
imprimirFrutas();  

// Desarrollador 4 Fernando Chacon
agregarFruta("kiwi"); 

// Desarrollador 3 Brandon Loria
imprimirFrutas(); 
eliminarFruta("plátano");

// Desarrollador 1 Jenny Gong
imprimirFrutas();
