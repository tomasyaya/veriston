import { MediaFile } from "@/mocks/types";
import { Action } from "../Table/types";

export interface HeaderOption {
  value: string;
  label: string;
}

export interface MediaTableProps {
  mediaFiles: MediaFile[];
  loading?: boolean;
  curriedActions: (
    file: MediaFile,
    fileIndex?: number,
    files?: MediaFile[]
  ) => Action[];
}
