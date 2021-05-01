import styled from "@emotion/styled";
import React from "react";

const Cell = styled("div")`
  width: 30%;
  height: 180px;
  margin: ${({ theme }) => theme?.gutters.s}px;
`;

const GridWrapper = styled("div")`
  max-width: 950px;
  margin: ${({ theme }) => theme?.gutters.base}px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

function clone(child: any) {
  return React.createElement(Cell, { children: child });
}

function createCells(children: React.ReactNode) {
  return React.Children.toArray(children).map(clone);
}

interface GalleryProps {
  children: React.ReactNode;
}

function Gallery({ children }: GalleryProps) {
  const elements = createCells(children);
  return <GridWrapper>{elements}</GridWrapper>;
}

export default Gallery;
