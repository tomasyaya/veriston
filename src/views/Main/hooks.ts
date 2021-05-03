import React from "react";
import { UseFilters, Filters, UseGalleryModal } from "./types";
import { getFiles } from "../../mocks/services";
import { MediaFile } from "../../mocks/types";

export function useFilters(): UseFilters {
  const [filters, setFilters] = React.useState<Filters>({});
  const handleFilters = ({ target }: React.BaseSyntheticEvent) => {
    setFilters((filters) => ({ ...filters, [target.name]: target.checked }));
  };

  return { values: filters, handleFilters };
}

export function useFiles(
  query: string
): { files: MediaFile[]; loading: boolean } {
  const [files, setFiles] = React.useState<MediaFile[]>([]);
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    (async () => {
      setLoading(true);
      const data = await getFiles(query);
      setFiles(data);
      setLoading(false);
    })();
  }, [query]);
  return { files, loading };
}

export function useSearch() {
  const [search, setSearch] = React.useState<string>("");
  const handleSearch = (search: string) => {
    setSearch(search);
  };
  return { search, handleSearch };
}

export function useGalleryModal(): UseGalleryModal {
  const [openModal, setOpenModal] = React.useState(false);
  const [defaultPosition, setDefaultPosition] = React.useState(0);
  const handleOpen = () => {
    setOpenModal(true);
  };
  const handleClose = () => {
    setOpenModal(false);
  };
  const handlePosition = (position: number) => {
    setDefaultPosition(position);
  };

  return {
    openModal,
    defaultPosition,
    handleOpen,
    handlePosition,
    handleClose,
  };
}
