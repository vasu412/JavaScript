const body = document.querySelector('.section');

async function fetchPokemonData() {
    let pokemonData = [];
    for (let i = 1; i <= 1000; i++) {
        try {
            let poke = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${i}/`);
            let res = await poke.json();
            let data2 = await fetch(res.varieties[0].pokemon.url);
            let res2 = await data2.json();
            pokemonData.push({ species: res, details: res2 });
        } catch (error) {
            console.error("Error fetching Pokémon data:", error);
        }
    }
    // Sort the pokemonData array based on Pokémon ID
    pokemonData.sort((a, b) => a.details.id - b.details.id);
    return pokemonData;
}

async function displayPokemonCards() {
    try {
        const pokemonData = await fetchPokemonData();
        pokemonData.forEach(pokemon => {
            const div = createPokemonCard(pokemon.species, pokemon.details);
            body.appendChild(div);
        });
    } catch (error) {
        console.error("Error displaying Pokémon cards:", error);
    }
}

function createPokemonCard(species, details) {
    let div = document.createElement('div');
    div.classList.add('box');

    let col = species.color.name;
    if (col === 'white') {
        col = 'skyblue';
    } else if (col === 'red') {
        col = 'orange';
    }
    div.innerHTML =
        `
    <main class="main" style="background-color:${col}"></main>
    <span>#${details.id}</span>
    <img src=${details.sprites.other['official-artwork'].front_default} alt="">
    <p class="p">${details.species.name.toUpperCase()}</p>
    <p></p>
    `;
    return div;
}

displayPokemonCards();
