import React from "react";
import {
  TableCell,
  TableRow,
  TableContainer,
  TableBody,
  TableHeader,
} from "../Table";
import { HeaderOption, MediaTableProps } from "./types";

const HEADERS: HeaderOption[] = [
  { value: "name", label: "Name" },
  { value: "type", label: "Type" },
  { value: "date", label: "Date" },
];

function Headers() {
  return (
    <React.Fragment>
      {HEADERS.map(({ value, label }) => (
        <TableCell header key={value}>
          {label}
        </TableCell>
      ))}
    </React.Fragment>
  );
}

function MediaTable({ mediaFiles, curriedActions }: MediaTableProps) {
  return (
    <TableContainer>
      <TableHeader>
        <Headers />
      </TableHeader>
      <TableBody>
        {mediaFiles.map((file) => (
          <TableRow actions={curriedActions(file)}>
            {HEADERS.map(({ value }) => {
              const currentValue = file[value];
              return <TableCell key={currentValue}>{currentValue}</TableCell>;
            })}
          </TableRow>
        ))}
      </TableBody>
    </TableContainer>
  );
}

export default MediaTable;
