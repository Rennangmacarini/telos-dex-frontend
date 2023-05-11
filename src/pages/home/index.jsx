import { useContext, useState } from "react";
import { CardPokemons } from "../../components/CardPokemons";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Container, Global, InputButtonDisplay } from "../../styles/styles";
import { TbSearch } from "react-icons/tb";
import { PokedexContext } from "../../contexts/PokedexContext";
import { SortBy } from "../../components/SortBy";
import { CircularProgress } from "@mui/material";

export function Home() {
  const imagens = {
    number: "./img/hashtag.png",
    text: "./img/letter.png",
  };

  const [pokemons, setPokemons, search, loading] = useContext(PokedexContext);

  const [selectedImage, setSelectedImage] = useState(imagens.number);

  const handleImageChange = (event) => {
    let img = imagens.text;
    let sortList = pokemons.sort((a, b) => a.name.localeCompare(b.name));

    if (event.target.value === "number") {
      img = imagens.number;
      sortList = pokemons.sort(
        (a, b) => a.game_indices[0].game_index - b.game_indices[0].game_index
      );
    }
    setPokemons(sortList);
    setSelectedImage(img);
  };

  const pokemonsFilter = (name) => {
    search(name);
  };

  return (
    <>
      <Global>
        <Container>
          <Header />
          <InputButtonDisplay>
            <Input
              icon={TbSearch}
              placeholder="Search"
              type="text"
              onChange={(e) => pokemonsFilter(e.target.value === "" ? undefined : e.target.value)}
            />
            <img src={selectedImage} alt="" />
          </InputButtonDisplay>

          {loading && (
            <div
              style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                padding: "20px",
              }}
            >
              <CircularProgress sx={{ color: `white` }} />
            </div>
          )}
          {!loading && <CardPokemons pokemons={pokemons} />}
        </Container>
        <SortBy selectedImage={selectedImage} handleImageChange={handleImageChange} />
      </Global>
    </>
  );
}
