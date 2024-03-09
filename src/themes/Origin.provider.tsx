import React, { ReactNode } from "react";
import {
  configureFonts,
  MD3Colors,
  MD3LightTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import { MD3Theme, ThemeProp } from "react-native-paper/lib/typescript/types";
import colors from "./colors";
import { useFonts } from "expo-font";

interface OriginProviderProps {
  children: ReactNode;
}

export type ExtendedMD3Colors = typeof MD3Colors & {
  excellentDark: string;
  white: string;
  black: string;
  neutralDefault: string;
  surfacePrimary: string;
  text: {
    neutralDefault: string;
    neutralMuted: string;
  };
  border: {
    neutralDefault: string;
  };
};

export type OriginColors = MD3Theme & {
  colors: ExtendedMD3Colors;
};

export const OriginProvider = ({ children }: OriginProviderProps) => {
  const [loaded] = useFonts({
    "Raleway-Bold": require("../../assets/fonts/Raleway-Bold.ttf"),
    "Raleway-Italic": require("../../assets/fonts/Raleway-Italic.ttf"),
    "Raleway-BoldItalic": require("../../assets/fonts/Raleway-BoldItalic.ttf"),
    "Raleway-Regular": require("../../assets/fonts/Raleway-Regular.ttf"),
  });

  const baseFont = {
    fontFamily: "Raleway-Regular",
  };

  const baseVariants = configureFonts({ config: baseFont });

  const customVariants = {
    displayMedium: {
      ...baseVariants.displayMedium,
      fontFamily: "Raleway-Bold",
      color: "#FFF",
    },
    bold: {
      ...baseVariants.bodyMedium,
      fontFamily: "Raleway-Bold",
      color: "#FFF",
    },
    italic: {
      ...baseVariants.bodyMedium,
      fontFamily: "Raleway-Italic",
      color: "#FFF",
    },
    boldItalic: {
      ...baseVariants.bodyMedium,
      fontFamily: "Raleway-BoldItalic",
      color: "#FFF",
    },
  };

  const fonts = configureFonts({
    config: {
      ...baseVariants,
      ...customVariants,
    },
  });

  const theme = {
    ...MD3LightTheme,
    roundness: 8,
    colors: {
      ...MD3LightTheme,
      ...colors,
    },
    fonts,
  } as ThemeProp;

  if (!loaded) {
    return null;
  }

  return <PaperProvider theme={theme}>{children}</PaperProvider>;
};
