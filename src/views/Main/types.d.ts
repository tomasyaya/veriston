import React from "react";

import { MediaFile } from "@/mocks/types";

import { Action } from "@/components/Actions/types";

export interface Filters {
  audio?: boolean;
  video?: boolean;
  image?: boolean;
}

export interface UseFilters {
  values: Filters;
  handleFilters: (e: React.BaseSyntheticEvent) => void;
}

export interface UserSearch {
  search: string;
  handleSearch: (search: string) => void;
}

export interface UseGalleryModal {
  openModal: boolean;
  defaultPosition: number;
  handleOpen: () => void;
  handlePosition: (position: number) => void;
  handleClose: () => void;
}

interface MainProps {
  handleSearch: (arg: string) => void;
  search: string;
  filters: Filters;
  handleFilters: (e: React.BaseSyntheticEvent) => void;
  curriedActions: (file: MediaFile, fileIndex?: number) => Action[];
  openModal: boolean;
  handleClose: () => void;
  files: MediaFile[];
  defaultPosition: number;
  loading?: boolean;
}
