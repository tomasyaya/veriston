import React from "react";
import { TableContainer } from "./styles";
import { TableHeaderProps } from "./types";

function TableHeader({ ...props }: TableHeaderProps) {
  return <TableContainer {...props} />;
}

export default TableHeader;
