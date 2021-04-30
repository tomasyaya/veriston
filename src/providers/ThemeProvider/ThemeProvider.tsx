import React from "react";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { Theme } from "../../styles";
import { Themes, ThemeProviderProps } from "./types";
import { themes, themeSelectors, DEFAULT } from "./utils";

const ThemeCtx = React.createContext({});

export function useTheme() {
  return React.useContext(ThemeCtx);
}

function ThemeProvider({ children }: ThemeProviderProps) {
  const [selectedTheme, setSelectedTheme] = React.useState<Themes>(DEFAULT);
  const currentTheme = React.useMemo<Theme>(() => themes(selectedTheme), [
    selectedTheme,
  ]);
  const selectors = React.useMemo(themeSelectors(setSelectedTheme), [
    setSelectedTheme,
  ]);
  return (
    <ThemeCtx.Provider
      value={{ themeSelectors: selectors, theme: currentTheme }}
    >
      <EmotionThemeProvider theme={currentTheme}>
        {children}
      </EmotionThemeProvider>
    </ThemeCtx.Provider>
  );
}

export default ThemeProvider;
