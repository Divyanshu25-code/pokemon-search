import { useState, useEffect } from 'react';

export default function usePokemon(pokemons) {
  const [filteredPokemons, setFilteredPokemons] = useState(pokemons);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');

  // Filtering  search term and type filter
  useEffect(() => {
    if (searchTerm || selectedType) {
      const filtered = pokemons.filter((pokemon) => {
        const matchesName = pokemon.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesType = selectedType
          ? pokemon.types.some((t) => t.type.name === selectedType)
          : true;
        return matchesName && matchesType;
      });
      setFilteredPokemons(filtered);
    } else {
      // If no filters
      setFilteredPokemons(pokemons);
    }
  }, [searchTerm, selectedType, pokemons]);

  return {
    filteredPokemons,
    searchTerm,
    selectedType,
    setSearchTerm,
    setSelectedType,
  };
}
