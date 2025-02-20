// Selecciona el elemento con el id "listPokemon" donde se mostrarán los Pokémon en el HTML
const listPokemon = document.querySelector("#listPokemon");

// Selecciona todos los botones del encabezado que tienen la clase "btn-header"
const botonesHeader = document.querySelectorAll(".btn-header");

// URL base de la API de Pokémon que usaremos para obtener información
let URL = "https://pokeapi.co/api/v2/pokemon/";

for (let i = 1; i <= 151; i++) { 
    fetch(URL + i)   
        .then((response) => response.json())   
        .then(data => mostrarPokemon(data));
}

// Función que crea un elemento HTML para mostrar la información de cada Pokémon
function mostrarPokemon(poke) {
    // Mapea los tipos del Pokémon y los convierte en elementos `<p>` con su clase correspondiente para aplicar estilos
    let tipos = poke.types.map((type) => `<p class="${type.type.name} tipo">${type.type.name}</p>`);
    tipos = tipos.join(''); // Une los elementos del array `tipos` en un solo string sin comas

    // Convierte el ID del Pokémon en una cadena de texto para formatearlo con ceros a la izquierda si es necesario
    let pokeId = poke.id.toString();
    if (pokeId.length === 1) {
        pokeId = "00" + pokeId; // Si el ID tiene 1 dígito, se le agregan dos ceros (Ej: "007")
    } else if (pokeId.length === 2) {
        pokeId = "0" + pokeId; // Si el ID tiene 2 dígitos, se le agrega un solo cero (Ej: "025")
    }

    // Crea un nuevo elemento `div` para representar al Pokémon en la lista
    const div = document.createElement("div");
    div.classList.add("pokemon"); // Agrega la clase "pokemon" al `div` para aplicar estilos CSS

    // Inserta la estructura HTML dentro del `div` con la información del Pokémon
    div.innerHTML = `
        <p class="pokemon-id-back">#${pokeId}</p> <!-- Muestra el ID del Pokémon con ceros a la izquierda -->
        <div class="pokemon-imagen">
            <img src="${poke.sprites.other["official-artwork"].front_default}" alt="${poke.name}"> <!-- Muestra la imagen oficial del Pokémon -->
        </div>
        <div class="pokemon-info">
            <div class="nombre-contenedor">
                <p class="pokemon-id">#${pokeId}</p> <!-- Muestra el ID del Pokémon nuevamente -->
                <h2 class="pokemon-nombre">${poke.name}</h2> <!-- Muestra el nombre del Pokémon -->
            </div>
            <div class="pokemon-tipos">
                ${tipos} <!-- Inserta los tipos del Pokémon en forma de párrafos con clases CSS -->
            </div>
            <div class="pokemon-stats">
                <p class="stat">${poke.height}m</p> <!-- Muestra la altura del Pokémon en metros -->
                <p class="stat">${poke.weight}kg</p> <!-- Muestra el peso del Pokémon en kilogramos -->
            </div>
        </div>
    `;
    
    // Agrega el `div` recién creado dentro del contenedor `listPokemon`
    listPokemon.append(div);
}

// Agrega un evento "click" a cada botón del encabezado para filtrar los Pokémon según su tipo
botonesHeader.forEach(boton => boton.addEventListener("click", (event) => {
    const botonId = event.currentTarget.id; // Obtiene el `id` del botón que fue clicado

    listPokemon.innerHTML = ""; // Borra los Pokémon mostrados para reemplazarlos con los filtrados

    // Vuelve a recorrer los primeros 151 Pokémon para aplicar el filtro según el botón seleccionado
    for (let i = 1; i <= 151; i++) {
        fetch(URL + i) // Hace una petición a la API para obtener los datos del Pokémon
            .then((response) => response.json()) // Convierte la respuesta a formato JSON
            .then(data => {
                if (botonId === "ver-todos") {
                    mostrarPokemon(data); // Si el botón es "ver-todos", muestra todos los Pokémon
                } else {
                    const tipos = data.types.map(type => type.type.name); // Obtiene los tipos del Pokémon
                    if (tipos.some(tipo => tipo.includes(botonId))) { // Verifica si el Pokémon tiene el tipo del botón clicado
                        mostrarPokemon(data); // Muestra solo los Pokémon que coinciden con el tipo seleccionado
                    }
                }
            });
    }
}));
