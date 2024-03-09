import { ViewStyle } from "react-native";

export interface StackProps {
  direction?: "row" | "column";
  spacing?: number;
  children?: React.ReactNode | React.ReactNode[] | null | undefined;
  style?: ViewStyle;
}
