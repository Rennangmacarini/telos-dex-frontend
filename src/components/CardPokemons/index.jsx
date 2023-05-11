import { Card, Ground, Content } from "../../styles/styles";

import { Link } from "react-router-dom";

export function CardPokemons({ pokemons }) {
  return (
    <Content>
      {pokemons?.map((pokemon, key) => (
        <Card key={key}>
          <h1>#{pokemon.id}</h1>
          <Link to={`/Information/${pokemon.id}`}>
            <img src={pokemon.sprites.other.home.front_default} alt="" />
          </Link>
          <h2>{pokemon.name}</h2>
          <Ground />
        </Card>
      ))}
    </Content>
  );
}
