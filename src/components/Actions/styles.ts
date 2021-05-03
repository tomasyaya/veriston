import styled from "@emotion/styled";

export const IconButton = styled("button")`
  margin-left: ${({ theme }) => theme.gutters?.s}px;
  background-color: transparent;
  border: none;
  svg {
    transition: transform 0.3s ease-in-out;
    vertical-align: middle;

    path {
      fill: ${({ theme }) => theme?.designTokens?.table?.iconFill};
    }
  }
`;
