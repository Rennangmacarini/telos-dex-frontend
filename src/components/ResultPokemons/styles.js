import styled from "styled-components";

export const Contents = styled.div`
  width: 350px;
  
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  box-shadow: inset 0px 1px 3px 1px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  margin-top: 24px;
  padding: 24px;
  text-align: center;
  color: #383838;

  img {
    
    width: 200px;
  }

  h1 {
    font-size: 18px;
  }

  h5 {
    margin: 5px 0px;
    color: #1D1D1D;
  }

  h6 {
    width: 180px;
    height: 8px;
    border: none;
    margin: 12px 0px;
    border-radius: 4px;
  }

`;

export const ContentCards = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

`

export const CardPokemon = styled.div`
display: flex;
gap: 15px;
align-items: center;

a {
  color: white;
  margin-top: 0.2rem;
}

a:hover{
  color: #383838;
}

`