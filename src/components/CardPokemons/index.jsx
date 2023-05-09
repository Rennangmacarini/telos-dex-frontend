import { Card, Ground, Content  } from "../../styles/styles";
import { PokedexContext } from "../../contexts/PokedexContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export function CardPokemons(){
  const [pokemons, setPokemons] = useContext(PokedexContext)

  return(
    <Content>
    {pokemons.map((pokemon, key) =>
      <Card key={key}>
        <h1>#{pokemon.game_indices[0].game_index}</h1>
       <Link to="/Information"><img src={pokemon.sprites.other.home.front_default} alt="" /></Link>
        <h2>{pokemon.name}</h2>
        <Ground />
      </Card>
    )}
  </Content>
  )
}