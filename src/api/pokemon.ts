import { sleep } from "../utils";

export type Pokemon = {
  id: number;
  name: string;
  sprites: {
    front_shiny: string;
  };
};

export const getPokemon = async (id: string): Promise<Pokemon> => {
  await sleep(1000); // simulate slow network
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  return response.json();
};
