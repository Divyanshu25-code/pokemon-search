import SearchForm from "./components/SearchForm";
import { fetchAllPokemons, fetchPokemonTypes } from "./libs/fetchPokemon";

export default async function HomePage() {
  // Fetch the Pokémon list and types from the server
  const pokemons = await fetchAllPokemons();
  const types = await fetchPokemonTypes();

  return (
    <div className="container mx-auto p-4">
      <h1 className="lg:text-4xl font-bold text-center mb-6 sm:text-2xl">Pokémon Search App</h1>


      <SearchForm pokemons={pokemons} types={types} />
    </div>
  );
}
