import axios from "axios";
import { useEffect, useState } from "react";
import { PokedexContext } from "./PokedexContext";


export function PokedexProvider({ children }){
    const [pokemons, setPokemons] = useState([])

  const teste = (name) => {
      axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=4")
      .then((response) => {
        response.data.results.map(async (item) => {
          await axios.get(item.url).then((pokemon) => {
            setPokemons((prev) => [...prev, pokemon.data]);
          });
        });
      })
      .catch((error) => {
        console.error(error);
      });
    }

    useEffect(() => {
       teste()
      }, [axios]);

    return <PokedexContext.Provider value={[pokemons, setPokemons]}>{children}</PokedexContext.Provider>
}

