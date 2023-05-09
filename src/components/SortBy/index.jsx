import { Container, Content, InputContent } from "./styles";

export function SortBy({selectedImage, handleImageChange}) {

  return (
    <Container> 
      <h1>Sort by:</h1>
      <Content>
      <div style={{display: "flex", flexDirection: "column", justifyContent: "center", width: "50px", margin: "0 auto"}}> 
        <InputContent>
          <input type="radio" name="name" value="number" checked={selectedImage.includes("hashtag")} onChange={handleImageChange}/>
          <label htmlFor="html">Number</label>
        </InputContent>

        <InputContent>
          <input  type="radio" name="name" value="text" checked={selectedImage.includes("letter")} onChange={handleImageChange} />
          <label htmlFor="">Name</label>
        </InputContent>
        </div>
      </Content>
    </Container>
  )
}