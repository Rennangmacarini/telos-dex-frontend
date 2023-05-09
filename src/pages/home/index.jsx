import { useContext, useState } from "react";
import { CardPokemons } from "../../components/CardPokemons";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Container, Global, InputButtonDisplay } from "../../styles/styles";
import { TbSearch } from "react-icons/tb"
import { PokedexContext } from "../../contexts/PokedexContext";
import { SortBy } from "../../components/SortBy";
import axios from "axios";

export function Home() {

  const imagens = {
    number: './img/hashtag.png',
    text: './img/letter.png',
  };

  const [pokemons, setPokemons] = useContext(PokedexContext)

  const [selectedImage, setSelectedImage] = useState(imagens.number);

  function search() {
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


  const handleImageChange = (event) => {
    let img = imagens.text
    let sortList = pokemons.sort((a, b) => a.name.localeCompare(b.name))

    if (event.target.value === 'number') {
      img = imagens.number
      sortList = pokemons.sort((a, b) => a.game_indices[0].game_index - b.game_indices[0].game_index)
    }
    setPokemons(sortList)
    setSelectedImage(img);
  };



  const pokemonsFilter = (name) => {
    if(name === ""){
      search()
    }

    let filterData = pokemons.filter(item => item.name.includes(name))
    if(filterData.length === 0){
     filterData = pokemons.filter(item => String(item.game_indices[0].game_index).includes(name))
    }
     
    let sortList = filterData.sort((a,b) => a.name.localeCompare(b.name))
    if(selectedImage === 'number'){
      sortList = pokemons.sort((a,b) => a.game_indices[0].game_index - b.game_indices[0].game_index )
    }
    setPokemons(sortList)
    setPokemons(filterData)
  }


  return (
    <>
      <Global>
        <Container>
          <Header />
          <InputButtonDisplay>
            <Input icon={TbSearch} placeholder="Search" type="text" onChange={(e) => pokemonsFilter(e.target.value)} />
            <img src={selectedImage} alt="" />
          </InputButtonDisplay>
          <CardPokemons />
        </Container>
        <SortBy
          selectedImage={selectedImage}
          handleImageChange={handleImageChange}
        />
      </Global>
    </>
  )
}