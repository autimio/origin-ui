import React, { FC } from "react";
import { View } from "react-native";
import { TextInput as TextInputPaper, useTheme } from "react-native-paper";
import { Typography } from "../../Atoms/Typography/Typography";
import { VariantProp } from "react-native-paper/lib/typescript/components/Typography/types";
import { InputProps } from "./Input.types";
import { styles } from "./Input.styles";
import { StyleSheet } from "react-native";
import { OriginColors } from "../../../themes/Origin.provider";
import { Tooltip } from "../Tooltip/Tooltip";

export const Input: FC<InputProps> = (props) => {
  const theme = useTheme<OriginColors>();

  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Typography
          style={StyleSheet.compose(styles.label, {
            color: theme.colors.excellentDark,
          })}
          variant={"bold" as VariantProp<string>}
        >
          {props.label}
        </Typography>
        {props.tooltip && <Tooltip {...props.tooltip} />}
      </View>
      <TextInputPaper
        {...props}
        mode="outlined"
        textColor={theme.colors.text.neutralDefault}
        style={styles.inputContainer}
        outlineStyle={{ borderColor: theme.colors.border.neutralDefault }}
        label=""
      />
    </View>
  );
};

export const Icon = TextInputPaper.Icon;
