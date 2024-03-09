import { Chip as ChipPaper, useTheme } from "react-native-paper";
import { ChipProps } from "./Chip.types";
import React, { FC } from "react";
import { styles } from "./Chip.styles";
import { StyleSheet } from "react-native";
import { OriginColors } from "../../../themes/Origin.provider";

export const Chip: FC<ChipProps> = (props) => {
  const theme = useTheme<OriginColors>();

  return (
    <ChipPaper
      mode="outlined"
      rippleColor="transparent"
      showSelectedCheck={false}
      textStyle={StyleSheet.compose(styles.textStyle, {
        color: theme.colors.text.neutralDefault,
      })}
      style={StyleSheet.compose(styles.container, {
        borderColor: props.selected
          ? theme.colors.primary
          : theme.colors.neutralDefault,
        backgroundColor: props.selected
          ? theme.colors.surfacePrimary
          : theme.colors.white,
      })}
      {...props}
    >
      {props.children}
    </ChipPaper>
  );
};
