import { ButtonProps as ButtonPropsPaper } from "react-native-paper";

export interface ButtonProps extends ButtonPropsPaper {
  fullWidth?: boolean;
  color?: "primary" | "secondary";
}
