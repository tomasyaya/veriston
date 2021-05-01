import React from "react";
import { UseFilters, Filters } from "./types";
import { getFiles } from "../../mocks/services";
import { MediaFile } from "../../mocks/types";

export function useFilters(): UseFilters {
  const [filters, setFilters] = React.useState<Filters>({});
  const handleFilters = ({ target }: React.BaseSyntheticEvent) => {
    setFilters((filters) => ({ ...filters, [target.name]: target.checked }));
  };

  return { values: filters, handleFilters };
}

export function useFiles(query: string): MediaFile[] {
  const [files, setFiles] = React.useState<MediaFile[]>([]);
  React.useEffect(() => {
    getFiles(query).then((data) => setFiles(data));
  }, [query]);
  return files;
}

export function useSearch() {
  const [search, setSearch] = React.useState("");

  const handleSearch = ({ target }: React.BaseSyntheticEvent) => {
    setSearch(target.value);
  };

  return { search, handleSearch };
}
