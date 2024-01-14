import * as React from "react";
import type {
  PressableAndroidRippleConfig,
  PressableProps,
} from "react-native";
import { Pressable, StyleSheet, Text } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

import type { Rounded } from "../theme/rounded";
import type { Size } from "../theme/size";

interface NPressableProps extends PressableProps {
  title: string;
  size?: keyof Size;
  rounded?: keyof Rounded;
  variant?: "primary" | "secondary" | "success" | "warning" | "danger";
}

const Button = React.forwardRef<typeof Pressable, NPressableProps>(
  (props, ref) => {
    const {
      title,
      size: pSize = "md",
      rounded: pRounded = "md",
      variant: pVariant = "primary",
      style,
      ...btnProps
    } = props;

    const { styles } = useStyles(stylesheet, {
      rounded: pRounded,
      size: pSize,
      variant: pVariant,
    });

    const f = React.useMemo<PressableAndroidRippleConfig>(() => ({}), []);

    return (
      <Pressable
        // ! TODO: Fix
        // @ts-expect-error
        ref={ref}
        style={StyleSheet.flatten([styles.container, style])}
        {...btnProps}
        {...f}
      >
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    );
  }
);

const stylesheet = createStyleSheet((theme) => ({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    variants: {
      size: {
        sm: { height: theme.size["sm"] },
        md: { height: theme.size["md"] },
        lg: { height: theme.size["lg"] },
      },
      rounded: {
        sm: { borderRadius: theme.rounded["sm"] },
        md: { borderRadius: theme.rounded["md"] },
        lg: { borderRadius: theme.rounded["lg"] },
        full: { borderRadius: theme.rounded["full"] },
      },
      variant: {
        primary: { backgroundColor: theme.colors.primary["700"] },
        secondary: { backgroundColor: theme.colors.secondary["700"] },
        warning: { backgroundColor: theme.colors.warning["700"] },
        success: { backgroundColor: theme.colors.success["700"] },
        danger: { backgroundColor: theme.colors.danger["700"] },
      },
    },
  },

  text: {
    color: theme.colors.white,
    fontWeight: "500",
    variants: {
      size: {
        sm: { height: theme.fontSize["sm"] },
        md: { height: theme.fontSize["md"] },
        lg: { height: theme.fontSize["lg"] },
      },
    },
  },
}));

export { Button };
