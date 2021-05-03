import { Action } from "../Table/types";

export type Size = "normal" | "full";

export interface ThumbProps {
  src: string;
  alt?: string;
}

export interface ThumbNailProp {
  type: string;
  src: string;
  name: string;
  actions?: Action[];
  size?: Size;
}
