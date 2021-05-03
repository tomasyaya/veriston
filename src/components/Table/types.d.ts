import React from "react";

export interface TableCellProps extends React.HTMLAttributes<HTMLTableElement> {
  children?: React.ReactNode;
  header?: boolean;
}

export interface TableBodyProps
  extends React.HTMLAttributes<HTMLTableSectionElement> {}

export interface TableHeaderProps
  extends React.HTMLAttributes<HTMLTableElement> {}

export interface TableRowProps
  extends React.HTMLAttributes<HTMLTableRowElement> {
  children?: React.ReactNode;
  header?: boolean;
  actions?: Action[];
}
