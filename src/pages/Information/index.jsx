import { useContext } from "react";
import { Header } from "../../components/Header";
import { ResultPokemons } from "../../components/ResultPokemons";
import { PokedexContext } from "../../contexts/PokedexContext";
import { Container, Global } from "../../styles/styles";


export function Information() {
  const [pokemons, setPokemons] = useContext(PokedexContext)

  return (
    <Global>
      <Container>
        <Header/>
          <ResultPokemons/>
      </Container>
    </Global>
  )
}