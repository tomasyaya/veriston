import React from "react";
import styled from "@emotion/styled";
import { TableHeaderWrapper } from "./styles";

interface TableHeaderProps
  extends React.HTMLAttributes<HTMLTableSectionElement> {}

function TableHeader({ ...props }: TableHeaderProps) {
  return <TableHeaderWrapper {...props} />;
}

export default TableHeader;
