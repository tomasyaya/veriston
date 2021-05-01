import React from "react";
import styled from "@emotion/styled";

export const TableBodyWrapper = styled("tbody")`
  display: table-row-group;
`;

export const TableCellWrapper = styled(
  ({ tagName, children, ...rest }: any) => {
    return React.createElement(tagName, rest, children);
  }
)`
  display: table-cell;
  border-bottom: 1px solid ${({ theme }) => theme.designTokens.controlBorders};
  padding: ${({ theme }) => theme.gutters?.base}px;
  text-align: left;
  text-transform: ${({ header }) => (!header ? "initial" : "uppercase")};
  vertical-align: inherit;
`;

export const TableContainer = styled("table")``;

export const TableHeaderWrapper = styled("thead")`
  display: table-header-group;
`;

export const TableRowWrapper = styled("tr")`
  color: inherit;
  display: table-row;
  outline: 0;
  vertical-align: middle;

  &:hover {
    background-color: ${({ theme }) => theme?.designTokens?.background};
  }
`;
