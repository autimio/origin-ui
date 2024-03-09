import React, { FC } from "react";
import { ProgressBar, useTheme } from "react-native-paper";
import { ProgressProps } from "./Progress.types";
import { Dimensions, View } from "react-native";
import { OriginColors } from "../../../themes/Origin.provider";
import { styles } from "./Progress.styles";

export const Progress: FC<ProgressProps> = (props) => {
  const theme = useTheme<OriginColors>();
  const stepArray = Array.from({ length: props.steps }, (_, i) => i + 1);
  const width = (Dimensions.get("screen").width - 48) / props.steps;

  return (
    <View style={styles.container}>
      {stepArray.map((step) => (
        <ProgressBar
          key={step}
          progress={1}
          color={
            step <= props.currentStep
              ? theme.colors.primary
              : theme.colors.surfacePrimary
          }
          style={[
            styles.progressBar,
            { width, marginEnd: step === props.steps ? 0 : 4 },
          ]}
        />
      ))}
    </View>
  );
};
