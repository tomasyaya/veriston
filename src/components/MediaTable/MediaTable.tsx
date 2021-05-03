import React from "react";
import {
  TableCell,
  TableRow,
  TableContainer,
  TableBody,
  TableHeader,
} from "../Table";
import { HeaderOption, MediaTableProps } from "./types";
import { Suspense } from "../Suspense";

const HEADERS: HeaderOption[] = [
  { value: "name", label: "Name" },
  { value: "type", label: "Type" },
  { value: "date", label: "Date" },
];

function Headers() {
  return (
    <TableRow header>
      {HEADERS.map(({ value, label }) => (
        <TableCell header key={value}>
          {label}
        </TableCell>
      ))}
    </TableRow>
  );
}

function MediaTable({ mediaFiles, curriedActions, loading }: MediaTableProps) {
  return (
    <TableContainer>
      <TableHeader>
        <Headers />
      </TableHeader>
      <TableBody>
        <Suspense loading={loading}>
          {mediaFiles.map((file, fileIndex, files) => (
            <TableRow
              actions={curriedActions(file, fileIndex, files)}
              key={file.id}
            >
              {HEADERS.map(({ value }) => {
                const currentValue = file[value];
                return (
                  <TableCell key={`${file.id}_${currentValue}`}>
                    {currentValue}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </Suspense>
      </TableBody>
    </TableContainer>
  );
}

export default MediaTable;
