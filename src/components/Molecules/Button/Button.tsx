import React, { FC } from "react";
import { Button as ButtonPaper, Icon, useTheme } from "react-native-paper";
import { Typography } from "../../Atoms/Typography/Typography";
import { styles } from "./Button.styles";
import { ButtonProps } from "./Button.types";
import { StyleSheet } from "react-native";
import { OriginColors } from "../../../themes/Origin.provider";

export const Button: FC<ButtonProps> = (props) => {
  const theme = useTheme<OriginColors>();

  return (
    <ButtonPaper
      {...props}
      icon={() => (
        <Icon
          source={props.icon}
          size={24}
          color={
            !props.disabled
              ? theme.colors.white
              : theme.colors.text.neutralMuted
          }
        />
      )}
      style={StyleSheet.compose(
        props.style,
        props.fullWidth && styles.fullWidth
      )}
      contentStyle={styles.contentStyle}
    >
      <Typography
        style={StyleSheet.compose(styles.text, {
          color: props.textColor || theme.colors.white,
        })}
        variant="bodyLarge"
      >
        {props.children}
      </Typography>
    </ButtonPaper>
  );
};
