// Need to use the React-specific entry point to import `createApi`
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Pokemon } from "../api/pokemon";

type PokemonApiResponse = Pokemon;

export const pokemonApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/pokemon" }),
  reducerPath: "pokemonApi",
  // Tag types are used for caching and invalidation.
  tagTypes: ["Pokemon"],
  refetchOnMountOrArgChange: 30, // this is the most common cache timing adjustment
  endpoints: (build) => ({
    // Supply generics for the return type (in this case `PokemonApiResponse`)
    // and the expected query argument. If there is no argument, use `void`
    // for the argument type instead.
    getPokemonById: build.query<PokemonApiResponse, string>({
      query: (id) => `/${id}`,
      // `providesTags` determines which 'tag' is attached to the
      // cached data returned by the query.
      providesTags: (_result, _error, id) => [{ type: "Pokemon", id }],
    }),
  }),
});

// Hooks are auto-generated by RTK-Query
// Same as `quotesApiSlice.endpoints.getQuotes.useQuery`
export const { useGetPokemonByIdQuery } = pokemonApiSlice;