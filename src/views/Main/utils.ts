import { Filters } from "./types";
import { MediaFile } from "../../mocks/types";

export function isLast(index: number, arr: any[]) {
  return index === arr.length - 1;
}
export function formatValue(filter: string, isLast: boolean) {
  return isLast ? filter : `${filter},`;
}
export function buildQuery(filters: Filters, key: string) {
  return Object.entries(filters)
    .filter(([_, include]) => include)
    .reduce((query, [filter, _], i, a) => {
      return query.concat(formatValue(filter, isLast(i, a)));
    }, `?${key}=`);
}

export function searchFiles(
  files: MediaFile[],
  searchTerm: string,
  key: string
) {
  return files.filter((file) => file[key].includes(searchTerm));
}
