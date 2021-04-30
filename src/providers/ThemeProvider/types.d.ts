export interface ThemeProviderProps {
  children: React.ReactNode;
}

export interface ThemeSelectors {
  default: () => void;
}

export type Themes = "default";
