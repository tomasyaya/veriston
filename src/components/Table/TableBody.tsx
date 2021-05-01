import { TableBodyWrapper } from "./styles";
import { TableBodyProps } from "./types";

function TableBody({ ...props }: TableBodyProps) {
  return <TableBodyWrapper {...props} />;
}

export default TableBody;
