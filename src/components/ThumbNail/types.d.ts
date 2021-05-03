import { Action } from "../Table/types";

export interface ThumbProps {
  src: string;
  alt?: string;
}

export interface ThumbNailProp {
  type: string;
  src: string;
  name: string;
  actions?: Action[];
}
