import React from "react";

export interface Action {
  label: string;
  action: () => void;
}

export interface TableCellProps extends React.HTMLAttributes<HTMLTableElement> {
  children?: React.ReactNode;
  header?: boolean;
}

export interface ActionsProps {
  actions: Action[];
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
