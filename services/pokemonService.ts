import {
  VerifyResponse,
  RandomResponse,
  PokemonList,
  Pokemon,
} from "../models/pokemon";

// Service which stores the logic for the body generation

export const getRandomId = (max: number = 199): number => {
  return Math.floor(Math.random() * max) + 400; // Get random number from 400- 599
};

// Creates the randomResponse.
// namesList is a set. A random id is gerated to get a single pokemon name from the pokemon list.
// It addes it to the names list. Since its a set it only takes unique values.
export const createRandomResponse = (
  pokemon: Pokemon,
  pokemonList: PokemonList
): RandomResponse => {
  const namesList = new Set<string>();
  namesList.add(pokemon.name);

  // Will run till there are 4 unique choices within the set.
  const lengthOfResult = pokemonList.results.length; // This will be used to set the upper limit for the random number beased on length of result array.
  while (namesList.size < 4) {
    const randomIndex = getRandomId(lengthOfResult) - 400; // The data from pokemon names is from index 0-199. Remove the extra 400 from random API.
    const result = pokemonList.results[randomIndex];
    if (result) namesList.add(result.name);
  }

  return {
    id: pokemon.id,
    image: pokemon.sprites.other["official-artwork"]["front_default"],
    names: Array.from(namesList).sort(() => Math.random() - 0.5),
  };
};

// Compares users chocie to the actual name
// then creates a response.
export const createVerifyResponse = (
  pokemonName: string,
  userChoice: string
): VerifyResponse => {
  const answer = pokemonName === userChoice ? true : false;

  return {
    correct: answer,
    name: pokemonName,
  };
};
