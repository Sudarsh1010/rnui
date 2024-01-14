import type { TextStyle } from "react-native";

// !TODO: fix this
const rounded = {
  sm: 8 as TextStyle["borderRadius"],
  md: 12 as TextStyle["borderRadius"],
  lg: 14 as TextStyle["borderRadius"],
  full: "50%" as unknown as TextStyle["borderRadius"],
} as const;

type Rounded = typeof rounded;
export { type Rounded, rounded };
