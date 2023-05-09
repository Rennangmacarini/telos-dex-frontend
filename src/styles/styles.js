import styled from "styled-components";

export const Global = styled.div`
margin: auto;
width: 600px;
display: flex;
align-items: center;
justify-content: center;
min-height: 100vh;
`

export const Container = styled.div`
  width: 360px;
  margin: auto;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_RED};
  padding: 4px;
`;

export const HeaderMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 20px 16px 12px;
  color: ${({ theme }) => theme.COLORS.WHITE};

  h1{
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  }

  > img {
    width: 25px;
  }

`;

export const InputButtonDisplay = styled.div`
display: flex;
align-items: center;
gap: 16px;
`

export const Content = styled.div`
  display: grid;
  gap: 15px;
  text-align: center;
  grid-template-columns: 1fr 1fr 1fr;
  width: 350px;
  
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  box-shadow: inset 0px 1px 3px 1px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  margin-top: 24px;
  padding: 24px;
`;

export const Card = styled.div`
  position: relative;
  z-index: 1;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 8px;
  h1,
  h2 {
    font-size: 12px;
  }

  h1 {
    text-align: end;
  }

  >a, img {
    width: 72px;
  }
`;

export const Ground = styled.div`
  position: absolute;
  z-index: -1;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 44px;

  background: #efefef;
  border-radius: 7px;
`;

export const Imagem = styled.img`
width: 50px;
`
