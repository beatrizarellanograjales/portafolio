// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// //Paso1: crear un array para guardar la lista de amigos
// Creamos un array vacío para guardar los nombres
let amigos = [];

// Paso 2: Creamos un bucle para ingresar nombres de amigos
while (true) {
    let nombre = prompt("Escribe el nombre de tu amigo (o escribe 'fin' para terminar):");

    // Si el usuario escribe 'fin', rompemos el bucle
    if (nombre.toLowerCase() === "fin") {
        break;
    }

    // Si el usuario no escribe nada o solo pone espacios , pedimos de nuevo
    if (nombre.trim() === "") {
        alert("Por favor, escribe un nombre válido.");
        continue;
    }

    // Validación para detectar números en el nombre
    const contieneNumeros = /\d/.test(nombre); // Esto busca cualquier dígito del 0 al 9

    if (contieneNumeros) {
        alert("Solo se aceptan letras, no números.");
        continue; // vuelve al inicio del bucle
    }

    // Agregamos el nombre al array solo si pasa las validaciones
    amigos.push(nombre);
}

// Paso 3: Mostramos la lista completa de amigos
console.log("Lista de amigos:", amigos);
alert("Has ingresado los siguientes nombres: " + amigos.join(", "));

