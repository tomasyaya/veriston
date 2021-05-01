import { ThemeSelectors, Themes } from "./types";
import defaultTheme from "../../styles/theme.default";
import { Theme } from "@/styles";

export const DEFAULT = "default";

export function themes(theme: Themes) {
  const themeMap = new Map([[DEFAULT, defaultTheme]]);
  return themeMap.get(theme) as Theme;
}

export const themeSelectors = (
  setSelectedTheme: React.Dispatch<React.SetStateAction<Themes>>
) => (): ThemeSelectors => ({ default: () => setSelectedTheme(DEFAULT) });
