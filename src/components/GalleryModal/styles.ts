import styled from "@emotion/styled";

export const Section = styled("section")`
  padding: ${({ theme }) => theme?.gutters?.base}px
    ${({ theme }) => theme?.gutters?.s}px;
`;

export const SliderContainer = styled("div")`
  display: flex;
  align-items: center;
`;

export const CloseCtn = styled("div")`
  display: flex;
  justify-content: flex-end;
`;

export const IconBtn = styled("button")`
  border: none;
  background-color: transparent;
  svg {
    vertical-align: middle;
    path {
      fill: ${({ theme }) => theme?.designTokens?.onSurface};
    }
  }
  :hover {
    path {
      fill: ${({ theme }) => theme?.designTokens?.surfaceBorders};
    }
  }
`;
