import { Pokemon } from "../../models/Pokemon.model";

export const PokemonList: Pokemon[] = [
    { name: 'bulbasaur', type: 'leaf' },
    { name: 'charmander', type: 'fire' },
    { name: 'squirtle', type: 'water' }
] as const;