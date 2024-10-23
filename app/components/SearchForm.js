"use client";

import usePokemon from "@/app/hooks/usePokemon";
import PokemonCard from "./PokemonCard";
import React from "react";

export default function SearchForm({ pokemons, types }) {
  const {
    filteredPokemons,
    searchTerm,
    setSearchTerm,
    selectedType,
    setSelectedType,
  } = usePokemon(pokemons);

  const handleSearch = (e) => {
    e.preventDefault();
    // Logic handled by the hook itself, nothing additional to do here
  };

  return (
    <React.Fragment>
      <form
        onSubmit={handleSearch}
        className="flex flex-col items-start justify-between mb-6 space-y-4 w-full"
      >
        {/* Select Box */}
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="border p-2 rounded-md w-full md:w-1/2 lg:w-1/4 h-12"
        >
          <option value="">Select</option>
          {types
            .filter((type) => type.name !== "unknown") // Filter out 'unknown'
            .map((type) => (
              <option key={type.name} value={type.name}>
                {type.name}
              </option>
            ))}
        </select>

        {/* Search Input and Button */}
        <div className="flex items-center w-full md:w-2/3 lg:w-1/3">
          <div className="relative w-full">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                className="w-5 h-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-4.35-4.35m1.45-4.65a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </span>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border p-2 pl-10 rounded-l-md w-full h-12"
              placeholder="Search Pokémon..."
            />
          </div>
          {/* Search Button */}
          <button
            type="submit"
            className="bg-textColor text-white p-2 rounded-r-md h-12 w-24"
          >
            Search
          </button>
        </div>
      </form>

      {/* Cards Display */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPokemons.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
    </React.Fragment>
  );
}
