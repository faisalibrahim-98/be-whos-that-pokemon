import { Pokemon, PokemonList } from "../models/pokemon";
import NodeCache from "node-cache";
import axios from "axios";

const cache = new NodeCache({ stdTTL: 0 });

const POKEAPI_BASE_URL = "https://pokeapi.co/api/v2";

// Get a specific pokemon's data from the pokeAPI based on ID and store it inside the cache then return.
export const fetchPokemonData = async (pokemonId: number): Promise<Pokemon> => {
  try {
    const cachedData: Pokemon | undefined = cache.get(pokemonId);
    if (cachedData) return cachedData;

    const { data } = await axios.get<Pokemon>(
      `${POKEAPI_BASE_URL}/pokemon/${pokemonId}`
    );

    cache.set(pokemonId, data);

    return data;
  } catch (error: unknown) {
    console.error(error);
    throw new Error("Error while getting pokemon");
  }
};

// Get a list of 200 pokemon names and save them in cache.
// This api will only be called once and then stored in cache.
export const fetchPokemonNames = async (): Promise<PokemonList> => {
  try {
    const key = "List";
    const cachedData: PokemonList | undefined = cache.get(key);
    if (cachedData) return cachedData;

    const { data } = await axios.get<PokemonList>(
      `${POKEAPI_BASE_URL}/pokemon?limit=200`
    );

    cache.set(key, data);
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Error while getting Pokemon List");
  }
};
