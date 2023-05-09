import styled from "styled-components";

export const Contents = styled.div`
  width: 350px;
  
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  box-shadow: inset 0px 1px 3px 1px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  margin-top: 24px;
  padding: 24px;
`;