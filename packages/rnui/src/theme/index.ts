import { UnistylesRegistry } from "react-native-unistyles";

import { colors } from "./colors";
import { fontSize } from "./font-size";
import { rounded } from "./rounded";
import { size } from "./size";
import { spacing } from "./spacing";

export const lightTheme = {
  colors,
  spacing,
  fontSize,
  size,
  rounded,
} as const;

type AppThemes = {
  light: typeof lightTheme;
};

// override library types
declare module "react-native-unistyles" {
  export interface UnistylesThemes extends AppThemes {}
}

UnistylesRegistry.addThemes({ light: lightTheme }).addConfig({
  adaptiveThemes: true,
});
