import styled from "@emotion/styled";

export const TabPanelContainer = styled("div")<{ isActive: boolean }>`
  padding: ${({ theme }) => theme?.gutters?.base}px;

  max-width: 100%;
  display: ${({ isActive }) => (isActive ? "block" : "none")};
`;

export const TabsContainer = styled("div")`
  padding: ${({ theme }) => theme?.gutters?.base}px;
  background-color: ${({ theme }) => theme?.designTokens?.surface};
  border: 2px solid ${({ theme }) => theme?.designTokens?.surfaceBorders};
  border-radius: ${({ theme }) => theme?.miscellaneous?.borderRadius};
  max-width: 100%;
  display: flex;
  flex-direction: column;
`;

export const TabBtn = styled("button")`
  min-width: 56px;
  padding: ${({ theme }) => theme?.gutters?.s}px;
  border: 2px solid ${({ theme }) => theme?.designTokens?.surfaceBorders};
  height: 100%;
  :hover {
    background-color: ${({ theme }) => theme?.designTokens?.deepSurface};
  }
`;

export const TabListContainer = styled("div")`
  width: 100%;
`;
