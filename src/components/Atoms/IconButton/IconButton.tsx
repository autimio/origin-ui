import React, { FC } from "react";
import { IconButtonProps } from "./IconButton.types";
import { IconButton as IconButtonPaper, useTheme } from "react-native-paper";
import { OriginColors } from "../../../themes/Origin.provider";

export const IconButton: FC<IconButtonProps> = (props) => {
  const theme = useTheme<OriginColors>();
  return (
    <IconButtonPaper
      size={24}
      iconColor={theme.colors.text.neutralDefault}
      {...props}
    />
  );
};
