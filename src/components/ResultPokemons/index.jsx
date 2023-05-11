import { useContext, useEffect, useState } from "react";
import { PokedexContext } from "../../contexts/PokedexContext";
import { Contents, ContentCards, CardPokemon, ContenainerCards } from "./styles";
import { FiArrowLeft } from "react-icons/fi";
import { TbWeight } from "react-icons/tb";
import { CiLineHeight } from "react-icons/ci";
import { CircularProgress, LinearProgress } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { useMemo } from "react";

export function ResultPokemons() {
  const [pokemons, setPokemons, search, loading] = useContext(PokedexContext);
  const [pokemon, setSelectedPokemon] = useState({});
  const { pokemonId } = useParams();


  useMemo(() => {
    if (loading) {
      return;
    }
    if (pokemons.length > 0) {
      setSelectedPokemon(
        pokemons.filter((pokemon) => pokemon.id.toString() === pokemonId.toString())[0]
      );
    } else {
      search();
    }
  }, [pokemonId, pokemons]);

  const colorsList = [
    { type: `grass`, color: `#74CB48` },
    { type: `fire`, color: `#F57D31` },
    { type: `bug`, color: `#A7B723` },
    { type: `dark`, color: `#75574C` },
    { type: `dragon`, color: `#7037FF` },
    { type: `fairy`, color: `#E69EAC` },
    { type: `fighting`, color: `#C12239` },
    { type: `flying`, color: `#A891EC` },
    { type: `ghost`, color: `#70559B` },
    { type: `normal`, color: `#AAA67F` },
    { type: `ground`, color: `#DEC16B` },
    { type: `ice`, color: `#9AD6DF` },
    { type: `psychic`, color: `#FB5584` },
    { type: `rock`, color: `#B69E31` },
    { type: `water`, color: `#6493EB` },
  ];

  return (

    <>

      {loading && <CircularProgress />}
      {pokemon?.id && (
        <Contents style={{
          position: "relative",
          zIndex: "2",
          backgroundColor: `${colorsList.filter((color) => color.type === pokemon.types[0].type.name)[0]?.color ??
            `black`
            }`
        }}>
          <ContenainerCards/>
            <div key={pokemon.id}>
              <div
                className={`color-${pokemon.types[0].type.name}`}
                style={{
                  padding: "0.5rem 1rem",
                  borderRadius: "8px",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                <ContentCards>
                  <CardPokemon>
                    <Link to="/">
                      <FiArrowLeft style={{ fontSize: "25px" }} />
                    </Link>
                    <h2>{pokemon.name}</h2>
                  </CardPokemon>

                  <h3>#{pokemon.game_indices[0].game_index}</h3>
                </ContentCards>
                <img src={pokemon.sprites.other.home.front_default} alt="" />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "24px",
                  }}
                >
                  {pokemon.types.map((type) => {
                    return (
                      <h4
                        style={{
                          padding: "2px 10px",
                          borderRadius: "10px",
                          fontSize: "12px",
                          backgroundColor: `${colorsList.filter((color) => color.type === type.type.name)[0]?.color ??
                            `#A43E9E`
                            }`,
                        }}
                      >
                        {type.type.name}
                      </h4>
                    );
                  })}
                </div>
                <h1 style={{ margin: "16px 0px", color: `${colorsList.filter((color) => color.type === pokemon.types[0].type.name)[0]?.color ??
            `black`
            }`}}>About</h1>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "25px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    gap: "5px",
                    borderRight: "1px solid #E0E0E0",
                    paddingRight: "25px",
                    marginLeft: "-10px"
                  }}
                >
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

              <h1 style={{ margin: "1rem 0rem",  color: `${colorsList.filter((color) => color.type === pokemon.types[0].type.name)[0]?.color ??
            `black`
            }`  }}>Base Stats</h1>
              <div style={{ display: "flex", alignItems: "center", gap: "25px" }}>
                <div style={{ borderRight: "1px solid #E0E0E0", paddingRight: "15px" }}>
                  <h5 style={{color: `${colorsList.filter((color) => color.type === pokemon.types[0].type.name)[0]?.color ??
            `black`
            }`}}>HP</h5>
                  <h5
                  style={{color: `${colorsList.filter((color) => color.type === pokemon.types[0].type.name)[0]?.color ??
                    `black`
                    }`}}
                  >ATK</h5>
                  <h5
                  style={{color: `${colorsList.filter((color) => color.type === pokemon.types[0].type.name)[0]?.color ??
                    `black`
                    }`}}
                  >DEF</h5>
                  <h5
                  style={{color: `${colorsList.filter((color) => color.type === pokemon.types[0].type.name)[0]?.color ??
                    `black`
                    }`}}
                  >SATK </h5>
                  <h5
                  style={{color: `${colorsList.filter((color) => color.type === pokemon.types[0].type.name)[0]?.color ??
                    `black`
                    }`}}
                  
                  >SDEF</h5>
                  <h5
                  style={{color: `${colorsList.filter((color) => color.type === pokemon.types[0].type.name)[0]?.color ??
                    `black`
                    }`}}
                  
                  >SPD</h5>
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
                  <h6>
                    <LinearProgress
                      sx={{
                        '& .MuiLinearProgress-bar': {backgroundColor: `${colorsList.filter((color) => color.type === pokemon.types[0].type.name)[0]?.color ??
                          `black`
                          }`}
                      }}
                      style={{ height: "6px", borderRadius: "4px", opacity: "0.4", color: `black` }}
                      variant="determinate"
                      value={pokemon.stats[0].base_stat}
                    />
                  </h6>
                  <h6>
                    <LinearProgress
                    sx={{
                      '& .MuiLinearProgress-bar': {backgroundColor: `${colorsList.filter((color) => color.type === pokemon.types[0].type.name)[0]?.color ??
                        `black`
                        }`}
                    }}

                      color="inherit"
                      style={{ height: "6px", borderRadius: "4px", opacity: "0.4" }}
                      variant="determinate"
                      value={pokemon.stats[1].base_stat}
                    />
                  </h6>
                  <h6>
                    <LinearProgress
                    sx={{
                      '& .MuiLinearProgress-bar': {backgroundColor: `${colorsList.filter((color) => color.type === pokemon.types[0].type.name)[0]?.color ??
                        `black`
                        }`}
                    }}

                      color="inherit"
                      style={{ height: "6px", borderRadius: "4px", opacity: "0.4" }}
                      variant="determinate"
                      value={pokemon.stats[2].base_stat}
                    />
                  </h6>
                  <h6>
                    <LinearProgress
                    sx={{
                      '& .MuiLinearProgress-bar': {backgroundColor: `${colorsList.filter((color) => color.type === pokemon.types[0].type.name)[0]?.color ??
                        `black`
                        }`}
                    }}

                      color="inherit"
                      style={{ height: "6px", borderRadius: "4px", opacity: "0.4" }}
                      variant="determinate"
                      value={pokemon.stats[3].base_stat}
                    />
                  </h6>
                  <h6>
                    <LinearProgress
                    sx={{
                      '& .MuiLinearProgress-bar': {backgroundColor: `${colorsList.filter((color) => color.type === pokemon.types[0].type.name)[0]?.color ??
                        `black`
                        }`}
                    }}

                      color="inherit"
                      style={{ height: "6px", borderRadius: "4px", opacity: "0.4" }}
                      variant="determinate"
                      value={pokemon.stats[4].base_stat}
                    />
                  </h6>
                  <h6>
                    <LinearProgress
                    sx={{
                      '& .MuiLinearProgress-bar': {backgroundColor: `${colorsList.filter((color) => color.type === pokemon.types[0].type.name)[0]?.color ??
                        `black`
                        }`}
                    }}
                      color="inherit"
                      style={{ height: "6px", borderRadius: "4px", opacity: "0.4" }}
                      variant="determinate"
                      value={pokemon.stats[5].base_stat}
                    />
                  </h6>
                </div>
              </div>
          </div>
        </Contents>
      )}

    </>
  );
}
