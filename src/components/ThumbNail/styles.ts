import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Size } from "./types";

const small = "small";
const full = "full";
const normal = "normal";

const widthMap = new Map([
  [small, "130px"],
  [normal, "220px"],
  [full, "300px"],
]);
const heighthMap = new Map([
  [small, "100px"],
  [normal, "200px"],
  [full, "280px"],
]);

const dimensions = (size: Size) => css`
  width: ${widthMap.get(size)};
  height: ${heighthMap.get(size)};
`;

export const ThumbContainer = styled("div")<{ size: Size }>`
  border-radius: ${({ theme }) => theme?.miscellaneous?.borderRadiusL};
  padding: ${({ theme }) => theme?.gutters?.s}px;
  border: 1px solid ${({ theme }) => theme?.designTokens?.controlBorders};
  p {
    margin: ${({ theme }) => theme?.gutters?.s}px 0;
  }

  video,
  img,
  audio {
    ${({ size }) => dimensions(size)}
  }
`;
