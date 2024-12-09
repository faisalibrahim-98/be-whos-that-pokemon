import { RandomResponse, VerifyResponse } from "../models/pokemon";
import { mockPokemon, mockPokemonList } from "./mockPokemon";
import {
  createRandomResponse,
  createVerifyResponse,
  getRandomId,
} from "../services/pokemonService";

describe("Pokemon Service", () => {
  test("getRandomId() should return a number from 400-599", () => {
    expect(getRandomId()).toBeGreaterThan(399);
    expect(getRandomId()).toBeLessThan(599);
  });

  test("createRandomResponse() should return a body of response object", () => {
    const responseBody: RandomResponse = createRandomResponse(
      mockPokemon,
      mockPokemonList
    );

    expect(responseBody.id).toBe(mockPokemon.id);
    expect(responseBody.image).toBe(
      mockPokemon.sprites.other["official-artwork"]["front_default"]
    );
    expect(responseBody.names.length).toBe(4);
  });

  test("createVerifyResponse() should return true of response object", () => {
    const responseBody: VerifyResponse = createVerifyResponse(
      mockPokemon.name,
      mockPokemon.name
    );

    expect(responseBody.correct).toBe(true);
    expect(responseBody.name).toBe(mockPokemon.name);
  });

  test("createVerifyResponse() should return false of response object", () => {
    const responseBody: VerifyResponse = createVerifyResponse(
      mockPokemon.name,
      "False Name"
    );

    expect(responseBody.correct).toBe(false);
    expect(responseBody.name).toBe(mockPokemon.name);
  });
});
