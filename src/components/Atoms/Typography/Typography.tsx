import React, { FC } from "react";
import { Text } from "react-native-paper";
import { TypographyProps } from "./Typography.types";

export const Typography: FC<TypographyProps> = (props) => {
  return <Text {...props}>{props.children}</Text>;
};
