import { useQuery } from "react-query";
import { Pokemon, getPokemon } from "../api/pokemon";

export const usePokemon = (id: string) => {
  const { data, error, isLoading } = useQuery<Pokemon>(["pokemon", id], () =>
    getPokemon(id)
  );
  return { data, error, isLoading };
};
