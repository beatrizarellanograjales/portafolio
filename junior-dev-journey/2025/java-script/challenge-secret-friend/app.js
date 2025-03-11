// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// //Paso1: crear un array para guardar la lista de amigos
// Creamos un array vacío para guardar los nombres
// Creamos el array para almacenar los nombres

let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    // Validaciones

    // si la persona no escribe nada
    if (nombre === '') {
        alert("Por favor, escribe un nombre.");
        return;
    }

    // si la persona escribe un número
    if (/\d/.test(nombre)) {
        alert("Solo se aceptan letras, no números.");
        return;
    }

    // si la persona escribe simbolos raros y especiales
    if (/[!@#\$%^&*(),.?":{}|<>\-\+]/.test(nombre)) {
        alert("No se permiten símbolos especiales.");
        return;
    }

     // si la persona quiere escrirbir un nombre muy corto 
     if (nombre.length < 2) {
        alert("El nombre debe tener al menos 3 letras.");
        return;
    }

    // si el nombre ya fue agregado
    if (amigos.includes(nombre)) {
        alert("Este amigo ya fue agregado.");
        return;
    }

    // Agregar el nombre al array
    amigos.push(nombre);

    // Limpiar el input
    input.value = '';

    // Actualizar la lista en pantalla
    mostrarLista();
}

// Función para mostrar la lista de amigos en el <ul> con id="listaAmigos"
function mostrarLista() {
    const listaUl = document.getElementById('listaAmigos');
    
    // Limpiar el contenido actual
    listaUl.innerHTML = '';

    if (amigos.length === 0) {
        const li = document.createElement('li');
        li.textContent = "No has agregado ningún amigo todavía.";
        listaUl.appendChild(li);
        return;
    }

    // Crear un <li> para cada amigo
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaUl.appendChild(li);
    });
}

// Función para sortear un amigo
function sortearAmigo() {
    const resultadoUl = document.getElementById('resultado');

    // Limpiar el resultado anterior
    resultadoUl.innerHTML = '';

    if (amigos.length === 0) {
        alert("Debes agregar al menos un amigo antes de sortear.");
        return;
    }

    const indice = Math.floor(Math.random() * amigos.length);
    const ganador = amigos[indice];

    // Mostramos el resultado en pantalla con el ganador
    const li = document.createElement('li');
    li.textContent = `🎉 El amigo sorteado es: ${ganador}! 🎉`;
    resultadoUl.appendChild(li);
}