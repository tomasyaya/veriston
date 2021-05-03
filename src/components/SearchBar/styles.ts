import styled from "@emotion/styled";

export const SearchContainer = styled("div")`
  border-radius: ${({ theme }) => theme?.miscellaneous?.borderRadiusXL};
  border: 2px solid ${({ theme }) => theme?.designTokens?.surfaceBorders};
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme?.gutters?.s}px;
  background-color: ${({ theme }) => theme?.designTokens?.deepSurface};

  svg {
    path {
      fill: ${({ theme }) => theme?.designTokens?.onSurface};
    }
  }
`;

export const Input = styled("input")`
  border: none;
  background: transparent;
  width: 100%;
  height: 100%;
  padding: ${({ theme }) => theme?.gutters?.s}px;
  :focus {
    outline: none;
  }
`;
