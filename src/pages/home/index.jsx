import { useContext } from "react"
import { PokedexContext } from "../../contexts/PokedexContext";



export function Home() {
  const [pokedex, setPokedex] = useContext(PokedexContext);

  return (
    <div>
      {pokedex.map((movie, index) => (
        <div>
          <h5>{movie.data.name}</h5>
        </div>
      ))}
    </div>

  )
}