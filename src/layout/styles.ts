import styled from "@emotion/styled";

export const Container = styled("div")`
  max-width: 1000px;
  width: 90%;
  margin: 0 auto;
  min-height: 100vh;
  background-color: ${({ theme }) => theme?.designTokens?.background};
  padding: ${({ theme }) => theme?.gutters?.l}px;
`;
