import { TextInputProps, MD3Colors, MD3Theme } from "react-native-paper";
import { TooltipProps } from "../Tooltip/Tooltp.types";

export interface InputProps extends TextInputProps {
  tooltip?: TooltipProps;
}
