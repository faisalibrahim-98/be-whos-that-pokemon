import { fetchPokemonData, fetchPokemonNames } from "../module/pokeApi";
import express from "express";
import {
  createRandomResponse,
  createVerifyResponse,
  getRandomId,
} from "../services/pokemonService";
import {
  VerifyResponse,
  RandomResponse,
  PokemonList,
  Pokemon,
} from "../models/pokemon";

const router = express.Router();

// Route to get a random pokemon data.
// getRandomId generates a random id which is used to get a pokemons data.
router.get("/random", async (_req, res) => {
  try {
    const pokemon: Pokemon = await fetchPokemonData(getRandomId());
    const pokemonList: PokemonList = await fetchPokemonNames();

    const responseBody: RandomResponse = createRandomResponse(
      pokemon,
      pokemonList
    );

    res.status(200).send(responseBody);
  } catch (e) {
    console.log(e);
    res.sendStatus(500).send();
  }
});

// Route to verify weather the users options are correct or not.
// It takes the pokemon id goes to the pokemon sevices, gets the pokemon data
// then checks weather the users choice matches the pokemons name.
router.post("/verify", async (req, res) => {
  try {
    if (!req.body.id || !req.body.choice) {
      res.status(400).send("Missing Parameter");
      return;
    }

    const pokemonId: number = parseInt(req.body.id);
    const userChoice: string = req.body.choice.toString();

    const pokemon: Pokemon = await fetchPokemonData(pokemonId);
    const responseBody: VerifyResponse = createVerifyResponse(
      pokemon.name,
      userChoice
    );

    res.status(200).send(responseBody);
  } catch {
    res.sendStatus(500).send();
  }
});

export default router;
