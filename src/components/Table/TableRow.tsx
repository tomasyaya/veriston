import React from "react";
import TableCell from "./TableCell";
import { TableRowWrapper } from "./styles";
import { TableRowProps } from "./types";
import { Actions } from "../Actions";
import { Action } from "../Actions/types";

const defaultProps = {
  actions: [],
  header: false,
};

function extendChildren(
  children: React.ReactNode,
  header?: boolean,
  actions?: Action[]
) {
  const childrenToArray = React.Children.toArray(children);
  const hasActions = Array.isArray(actions) && actions.length;
  if (header) {
    return childrenToArray.concat(<TableCell key="action" header />);
  }
  if (hasActions) {
    return childrenToArray.concat(
      <TableCell>
        <Actions actions={actions as Action[]} />
      </TableCell>
    );
  }
  return childrenToArray;
}

function TableRow({ children, actions, header, ...props }: TableRowProps) {
  const extendedChildren = extendChildren(children, header, actions);
  return <TableRowWrapper {...props} children={extendedChildren} />;
}

TableRow.defaultProps = defaultProps;

export default TableRow;
