import Image from "next/image";
import Link from "next/link";

export default function PokemonCard({ pokemon }) {
  return (
    <div className="border rounded-lg p-6 shadow-lg bg-white text-left max-w-md"> {/* Increased padding and shadow */}
      <Image
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="mx-auto object-contain"
        width={300}  
        height={300}  
        quality={100}
      />

      <h2 className="capitalize font-bold text-2xl mt-4">{pokemon.name}</h2> 
      
      <Link
        href={`/${pokemon.name}`}
        className="text-blue-500 hover:underline mt-6 block"  
      >
        Details →
      </Link>
    </div>
  );
}
