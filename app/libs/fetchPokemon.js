export async function fetchAllPokemons() {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
    const data = await res.json();
  
    // Fetch additional details for each Pokémon
    const pokemons = await Promise.all(
      data.results.map(async (pokemon) => {
        const res = await fetch(pokemon.url);
        console.log(res,"Response Pokemons")
        return await res.json();
      })
    );
  
    return pokemons;
  }
  
  export async function fetchPokemonTypes() {
    const res = await fetch('https://pokeapi.co/api/v2/type');
    const data = await res.json();
    return data.results;
  }
  