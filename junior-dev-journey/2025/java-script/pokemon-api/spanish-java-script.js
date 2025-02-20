const listPokemon = document.querySelector("#listPokemon");  
let URL = "https://pokeapi.co/api/v2/pokemon/";

for (let i = 1; i <= 151; i++) { 
    fetch(URL + i)   
        .then((response) => response.json())   
        .then(data => console.log(data));
        /* .then(data => mostrarPokemon(data)); */
}

/*  A CONTINUACIÓN:  Esta línea de código genera dinámicamente una imagen para cada Pokémon
utilizando los datos de la API de PokeAPI. Se asegura de que cada Pokémon
tenga su propia imagen y su nombre como alternativa en caso de error. */

function mostrarPokemon(poke) {  
    let tipos = poke.types.map((type) => `<p class="${type.type.name} tipo">${type.type.name}</p>`).join('');

/* -------  */

    // let tipos = poke.types.map((type) => `<p class="${type.type.name} tipo">${type.type.name}</p>`).join('');

    let pokeId = poke.id.toString();
    if (pokeId.length === 1) {
        pokeId = "00" + pokeId;
    } else if (pokeId.length === 2) {
        pokeId = "0" + pokeId;
    }

    const div = document.createElement("div");
    div.classList.add("pokemon");
    div.innerHTML = `
        <p class="pokemon-id-back">#${pokeId}</p>
        <div class="pokemon-imagen">
            <img src="${poke.sprites.other["official-artwork"].front_default}" alt="${poke.name}">
        </div>
        <div class="pokemon-info">
            <div class="nombre-contenedor">
                <p class="pokemon-id">#${pokeId}</p>
                <h2 class="pokemon-nombre">${poke.name}</h2>
            </div>
            <div class="pokemon-tipos">
                ${tipos}
            </div>
            <div class="pokemon-stats">
                <p class="stat">${poke.height}m</p>
                <p class="stat">${poke.weight}kg</p>
            </div>
        </div>    
    `;
    listPokemon.append(div);
}
