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
  border-bottom: 1px solid
    ${({ theme }) => theme.designTokens.table.borderColor};
  font-size: ${({ theme, header }) =>
    header
      ? theme.designTokens.table.textSizeHeader
      : theme.designTokens.table.textSize};
  font-weight: ${({ theme, header }) =>
    header
      ? theme.designTokens.table.textWeightHeader
      : theme.designTokens.table.textWeight};
  padding: ${({ theme }) => theme.gutters?.base}px;
  text-align: left;
  text-transform: ${({ header }) => (!header ? "initial" : "uppercase")};
  vertical-align: inherit;

  &:hover {
    background-color: initial;
  }
`;

export const TableContainer = styled("table")`
  width: 100%;
`;

export const TableHeaderWrapper = styled("thead")`
  display: table-header-group;
`;

export const TableRowWrapper = styled("tr")`
  color: inherit;
  display: table-row;
  outline: 0;
  vertical-align: middle;
  transition: background-color 0.2s ease-in-out;
  border-bottom: 1px solid
    ${({ theme }) => theme?.designTokens?.table?.borderColor};

  &:hover {
    background-color: ${({ theme }) =>
      theme?.designTokens?.table?.hoverBackground};
  }

  &:last-child {
    td {
      border-bottom-color: transparent;
    }
  }
`;

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
