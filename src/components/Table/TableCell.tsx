import React from "react";
import { TableCellWrapper } from "./styles";
import { TableCellProps } from "./types";

const defaultProps = {
  header: false,
};

function TableCell({ children, header, ...rest }: TableCellProps) {
  const tagName = header ? "th" : "td";
  return (
    <TableCellWrapper {...rest} tagName={tagName}>
      {children}
    </TableCellWrapper>
  );
}

TableCell.defaultProps = defaultProps;

export default TableCell;
