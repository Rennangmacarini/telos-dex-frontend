import { useContext } from "react";
import { PokedexContext } from "../../contexts/PokedexContext";
import { Contents } from "./styles";
import axios from 'axios';

export function ResultPokemons() {
  const [pokemons, setPokemons] = useContext(PokedexContext)

  let name = pokemons;

  function search(query) {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(response => {
        const pokemon = response.data;
        setPokemons([pokemon]);
      })
      .catch(error => {
        console.error('Erro ao buscar pokémon:', error);
      });
  }

  return (
    <Contents>
      <h1 style={{ color: "black" }}>Olha</h1>

      {pokemons.map((pokemon, key) =>
        <div key={key}>
          <h1>#{pokemon.game_indices[0].game_index}</h1>
          <img src={pokemon.sprites.other.home.front_default} alt="" />
          <h2>{pokemon.name}</h2>

        </div>
      )}

    </Contents>
  )
}