import axios from "axios";
import { useMemo, useState } from "react";
import { PokedexContext } from "./PokedexContext";

export function PokedexProvider({ children }) {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);

  const search = (seachText) => {
    setPokemons([]);
    setLoading(true);
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${seachText ? seachText : ""}?limit= 500`)
      .then(async (response) => {
        if (seachText !== undefined) {
          setPokemons([response.data]);
          setLoading(false);
        } else {
          response.data.results.map(async (item) => {
            await axios.get(item.url).then((pokemon) => {
              setPokemons((prev) => [...prev, pokemon.data]);
            });
          });
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useMemo(() => {
    search();
  }, [axios]);

  return (
    <PokedexContext.Provider value={[pokemons, setPokemons, search, loading]}>
      {children}
    </PokedexContext.Provider>
  );
}
