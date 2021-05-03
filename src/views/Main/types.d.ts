import React from "react";

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
