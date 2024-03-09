import { ViewStyle, StyleSheet } from "react-native";
import { StackProps } from "./Stack.types";

export const styles = ({ direction, spacing }: StackProps) =>
  StyleSheet.create({
    container: {
      flex: 1,
      width: "100%",
      flexDirection: direction,
      alignItems: "center",
      gap: spacing,
    },
  });
