import Breadcrumbs from "@/app/components/Breadcrumb";
import Image from "next/image";

async function getPokemon(name) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function PokemonDetail({ params }) {
  const pokemon = await getPokemon(params.name);
  console.log(pokemon, "POKE");
  return (
    <div className="container mx-auto p-4">
      {/* Breadcrumbs */}
      <Breadcrumbs pokemon={pokemon.name} />

      <div className="max-w-md mx-auto bg-cardBody rounded-lg shadow-lg overflow-hidden">
        <div className="bg-cyanColor p-4 text-center">
          <Image
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            className="mx-auto object-contain"
            width={300}
            height={300}
            quality={100}
          />
        </div>

        <div className="p-6">
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-700">
              <b>Name:</b> {pokemon.name}
            </h2>
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-700">
              <b>Type :</b> {pokemon.types.map((t) => t.type.name).join(", ")}
            </h2>
          </div>

          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-700">
              <b>Abilities</b>{" "}
              {pokemon.abilities.map((a) => a.ability.name).join(", ")}
            </h2>
          </div>

          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-700">
              <b>Stats:</b>{" "}
              {pokemon.stats.map((stat) => `${stat.stat.name}`).join(", ")}
            </h2>
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-700">
              <b>Some Moves:</b>{" "}
              {pokemon.moves
                .slice(0, 10)
                .map((m) => m.move.name)
                .join(", ")}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
