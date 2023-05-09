import styled from "styled-components";

export const Container = styled.div`
  width: 280px;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.WHITE};

  box-shadow: inset 0px 1px 3px 1px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  margin-left: 16px;

  > input {
    width: 280px;
    height: 32px;

    padding: 1px;

    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;

    color: ${({ theme }) => theme.COLORS.INPUTCOLOR};
    background: transparent;
    border: 0;
  }

  > svg {
    color: ${({ theme }) => theme.COLORS.BACKGROUND_RED};
    margin: 0 14px;;
  }
`;
