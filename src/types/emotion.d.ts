import "@emotion/react";
import { Theme as VaristonTheme } from "../styles";

declare module "@emotion/react" {
  export interface Theme extends VaristonTheme {}
}
