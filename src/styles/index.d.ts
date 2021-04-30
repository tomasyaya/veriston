export type Gutters = {
    xl: 32;
    l: 24;
    base: 16;
    s: 8;
    xs: 4;
  };

export type Fonts = {
    family: "'Lato', sans-serif";
    sizes: {
      h1: "1.8rem";
      h2: "1.6rem";
      h3: "1.4rem";
      h4: "1.2rem";
      h5: "1.1rem";
      base: "16px";
      helperText: "0.8rem";
      copyText: "0.7rem";
    };
    weights: {
      light: 300;
      regular: 400;
      medium: 500;
      semiBold: 600;
    };
  };

  export type BlueColors = {
    blue100: "#65A1F8";
    blue200: "#3584F6";
    blue300: "#3869C2";
    blue400: "#193E73";
  };
  
  export type RedsColors = {
    red100: "#E87D83";
    red200: "#E04D55";
    red300: "#C1374D";
    red400: "#5C2023";
  };
  
  export type GreensColors = {
    green100: "#67B274";
    green200: "#49A359";
    green300: "#3A844B";
    green400: "#25522D";
  };
  
  export type OrangeColors = {
    orange100: "#F3A077";
    orange200: "#EF7E46";
    orange300: "#D65D2A";
    orange400: "#5C311B";
  };
  
  export type GreysColors = {
    grey50: "#FAFAFA";
    grey100: "#F5F5F5";
    grey150: "#F4F4F4";
    grey200: "#E0E0E0";
    grey300: "#BCBEBF";
    grey350: "#636669";
    grey400: "#3C3F43";
    grey450: "#373A3E";
    grey500: "#2C3034";
  };
  
  export type BasicColors = {
    white: "#FFFFFF";
    black: "#212529";
    transparent: "transparent";
  };

  export type Colors = BasicColors &
  BlueColors &
  GreensColors &
  RedsColors &
  OrangeColors &
  GreysColors;

export type Miscellaneous = {
  borderRadius: "4px";
  borderRadiusL: "6px";
  borderRadiusXL: "16px";
};

export type DesignTokenComponent = {
  background?: string;
  borderColor?: string;
  borderRadius?: string;
  shadow?: string;
  textColor?: string;
  textSize?: string;
  textWeight?: number;
};

export type DesignTokens = {
  background?: string;
  surface?: string;
  surfaceBorders?: string;
  onSurface?: string;
  controlBorders?: string;
  disabledSurface?: string;
  deepSurface?: string;
  shallowSurface?: string;
  successSurface?: string;
  successDeep?: string;
  errorSurface?: string;
  errorDeep?: string;
  warningSurface?: string;
  warningDeep?: string;
  infoSurface?: string;
  infoDeep?: string; 
};


export type Theme = {
    name: string;
    gutters: Gutters;
    fonts: Fonts;
    colors: Colors;
    miscellaneous: Miscellaneous;
    designTokens?: DesignTokens;
  };