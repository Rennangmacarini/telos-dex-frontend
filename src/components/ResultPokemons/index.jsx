import { useContext } from "react";
import { PokedexContext } from "../../contexts/PokedexContext";
import { Contents, ContentCards, CardPokemon } from "./styles";
import { FiArrowLeft } from 'react-icons/fi'
import { TbWeight } from "react-icons/tb";
import { CiLineHeight } from "react-icons/ci";
import { LinearProgress } from "@mui/material";
import { Link } from "react-router-dom";

export function ResultPokemons() {
  const [pokemons, setPokemons] = useContext(PokedexContext)


  return (
    <Contents>
      {pokemons.map((pokemon, key) =>
        <div key={key}>
          <div style={{backgroundColor: "#A6A6A6", padding: "0.5rem 1rem" ,borderRadius: "8px", color: "white", fontWeight: "bold"}}>
            <ContentCards >
              <CardPokemon>
               <Link to="/"><FiArrowLeft style={{fontSize: "25px"}} /></Link>
                <h2>{pokemon.name}</h2>
              </CardPokemon>
              <h3>#{pokemon.game_indices[0].game_index}</h3>
            </ContentCards>
            <img src={pokemon.sprites.other.home.front_default} alt="" />
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "24px" }}>
              <h4>{pokemon.types[0].type.name}</h4>
              <h4>{pokemon.types[1].type.name}</h4>
            </div>
            <h1 style={{ margin: "1rem 0rem" }}>About</h1>
          </div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "25px" }}>
            <div style={{ display: "flex", alignItems: "center", flexDirection: "column", gap: "5px", borderRight: "1px solid #E0E0E0", paddingRight: "25px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <TbWeight />
                <h4>{pokemon.weight}</h4>
              </div>
              <h5>Weight</h5>
            </div>

            <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <CiLineHeight />
                <h4>{pokemon.height}</h4>
              </div>
              <h5>Height</h5>
            </div>
          </div>

          <h1 style={{ margin: "1rem 0rem" }}>Base Stats</h1>
          <div style={{ display: "flex", alignItems: "center", gap: "25px" }}>

            <div style={{ borderRight: "1px solid #E0E0E0", paddingRight: "15px" }}>
              <h5>HP</h5>
              <h5>ATK</h5>
              <h5>DEF</h5>
              <h5>SATK </h5>
              <h5>SDEF</h5>
              <h5>SPD</h5>
            </div>

            <div>
              <h5>{pokemon.stats[0].base_stat}</h5>
              <h5>{pokemon.stats[1].base_stat}</h5>
              <h5>{pokemon.stats[2].base_stat}</h5>
              <h5>{pokemon.stats[3].base_stat}</h5>
              <h5>{pokemon.stats[4].base_stat}</h5>
              <h5>{pokemon.stats[5].base_stat}</h5>
            </div>

            <div>
              <h6><LinearProgress color="inherit" style={{ height: "6px", borderRadius: "4px", opacity: "0.4" }} variant="determinate" value={pokemon.stats[0].base_stat} /></h6>
              <h6><LinearProgress color="inherit" style={{ height: "6px", borderRadius: "4px", opacity: "0.4" }} variant="determinate" value={pokemon.stats[1].base_stat} /></h6>
              <h6><LinearProgress color="inherit" style={{ height: "6px", borderRadius: "4px", opacity: "0.4" }} variant="determinate" value={pokemon.stats[2].base_stat} /></h6>
              <h6><LinearProgress color="inherit" style={{ height: "6px", borderRadius: "4px", opacity: "0.4" }} variant="determinate" value={pokemon.stats[3].base_stat} /></h6>
              <h6><LinearProgress color="inherit" style={{ height: "6px", borderRadius: "4px", opacity: "0.4" }} variant="determinate" value={pokemon.stats[4].base_stat} /></h6>
              <h6><LinearProgress color="inherit" style={{ height: "6px", borderRadius: "4px", opacity: "0.4" }} variant="determinate" value={pokemon.stats[5].base_stat} /></h6>
            </div>
          </div>
        </div>
      )
      }

    </Contents >
  )
}