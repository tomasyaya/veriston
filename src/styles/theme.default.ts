import {
  BlueColors,
  GreensColors,
  GreysColors,
  OrangeColors,
  RedsColors,
  Theme,
} from ".";

export const GREYS: GreysColors = {
  grey50: "#FAFAFA",
  grey100: "#F5F5F5",
  grey150: "#F4F4F4",
  grey200: "#E0E0E0",
  grey300: "#BCBEBF",
  grey350: "#636669",
  grey400: "#3C3F43",
  grey450: "#373A3E",
  grey500: "#2C3034",
};

export const BLUES: BlueColors = {
  blue100: "#65A1F8",
  blue200: "#3584F6",
  blue300: "#3869C2",
  blue400: "#193E73",
};

export const REDS: RedsColors = {
  red100: "#E87D83",
  red200: "#E04D55",
  red300: "#C1374D",
  red400: "#5C2023",
};

export const GREENS: GreensColors = {
  green100: "#67B274",
  green200: "#49A359",
  green300: "#3A844B",
  green400: "#25522D",
};

export const ORANGES: OrangeColors = {
  orange100: "#F3A077",
  orange200: "#EF7E46",
  orange300: "#D65D2A",
  orange400: "#5C311B",
};

const theme: Theme = {
  name: "default",
  gutters: {
    xl: 32,
    l: 24,
    base: 16,
    s: 8,
    xs: 4,
  },
  fonts: {
    family: "'Lato', sans-serif",
    sizes: {
      h1: "1.8rem",
      h2: "1.6rem",
      h3: "1.4rem",
      h4: "1.2rem",
      h5: "1.1rem",
      base: "16px",
      helperText: "0.8rem",
      copyText: "0.7rem",
    },
    weights: {
      light: 300,
      regular: 400,
      medium: 500,
      semiBold: 600,
    },
  },
  colors: {
    white: "#FFFFFF",
    black: "#212529",
    ...BLUES,
    ...ORANGES,
    ...REDS,
    ...GREENS,
    ...GREYS,
    transparent: "transparent",
  },
  miscellaneous: {
    borderRadius: "4px",
    borderRadiusL: "6px",
    borderRadiusXL: "16px",
  },
};

theme.designTokens = {
  successDeep: theme.colors.green300,
  successSurface: theme.colors.green200,
  errorDeep: theme.colors.red300,
  errorSurface: theme.colors.red200,
  infoDeep: theme.colors.blue300,
  infoSurface: theme.colors.blue200,
  warningDeep: theme.colors.orange300,
  warningSurface: theme.colors.orange200,
  background: theme.colors.grey50,
  surface: theme.colors.white,
  onSurface: theme.colors.black,
  surfaceBorders: theme.colors.grey200,
  shallowSurface: theme.colors.grey50,
  controlBorders: theme.colors.grey300,
  disabledSurface: theme.colors.grey150,
  deepSurface: theme.colors.grey100,
  table: {
    textSize: theme.fonts.sizes.base,
    textSizeHeader: theme.fonts.sizes.helperText,
    textWeight: theme.fonts.weights.light,
    textWeightHeader: theme.fonts.weights.semiBold,
    background: theme.colors.white,
    borderColor: theme.colors.grey200,
    hoverBackground: theme.colors.grey50,
    iconFill: theme.colors.black,
    iconFillActive: theme.colors.blue200,
  },
};

export default theme;
