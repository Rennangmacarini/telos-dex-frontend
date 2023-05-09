import styled from "styled-components";

export const Container = styled.div`
  width: 140px;
  padding-bottom: 4px;
  background: #dc0a2d;

  border-left: 4px solid #dc0a2d;

  box-shadow: 0px 3px 12px 3px rgba(0, 0, 0, 0.2);
  border-radius: 12px;

  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 16px;
    text-align: center;
    padding: 25px 0px;
    
    color: #ffffff;
  }
`;

export const Content = styled.div`
width: 130px;
height: 100px;


padding: 16px 0px;

background: #FFFFFF;

box-shadow: inset 0px 1px 3px 1px rgba(0, 0, 0, 0.25);
border-radius: 8px;

`;


export const InputContent = styled.div`
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 16px;
color: #1D1D1D;
width: 70px;

padding: 10px 0px;

display: flex;
gap: 10px;

input {
  cursor: pointer;
  appearance: none;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 2px solid red;

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

input:before {
  content: '';
  position: absolute;
  height: 5px;
  width: 5px;
  background-color: red;
  border-radius: 50%;
  opacity: 0;
}

input:checked:before{
  opacity: 1;
}

`

export const Imagem = styled.img`
width: 50px;

`
