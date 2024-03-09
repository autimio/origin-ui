import React, { FC } from "react";
import { View } from "react-native";
import { StackProps } from "./Stack.types";
import { styles } from "./Stack.styles";

export const Stack: FC<StackProps> = (props) => {
  return (
    <View style={[styles(props).container, props.style]}>{props.children}</View>
  );
};
