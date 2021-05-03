import styled from "@emotion/styled";

type Size = "normal" | "full";

export const ThumbContainer = styled("div")<{ size: Size }>`
  width: ${({ size }) => (size === "full" ? "100%" : "150px")};
  height: ${({ size }) => (size === "full" ? "100%" : "120px")};
  border-radius: ${({ theme }) => theme?.miscellaneous?.borderRadiusL};
  padding: ${({ theme }) => theme?.gutters?.s}px;
  border: 1px solid ${({ theme }) => theme?.designTokens?.controlBorders};
  p {
    margin: ${({ theme }) => theme?.gutters?.s}px 0;
  }
`;
