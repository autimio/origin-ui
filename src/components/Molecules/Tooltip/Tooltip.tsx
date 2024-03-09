import React, { useCallback, useState } from "react";
import { TouchableOpacity, View } from "react-native";

import { Icon, useTheme } from "react-native-paper";
import { Typography } from "../../Atoms/Typography/Typography";
import { styles } from "./Tooltip.styles";
import { TooltipProps } from "./Tooltp.types";
import { OriginColors } from "../../../themes/Origin.provider";

export const Tooltip: React.FC<TooltipProps> = ({
  icon = { size: 20, source: "information", color: "black" },
  onPress,
  title,
}) => {
  const theme = useTheme<OriginColors>();
  const [visible, setVisible] = useState(false);

  const onPressInternal = useCallback(() => {
    if (onPress) onPress();

    setVisible((prev) => !prev);
  }, []);

  return (
    <View style={styles.tooltipContainer}>
      <TouchableOpacity onPress={onPressInternal}>
        <Icon {...icon} />
      </TouchableOpacity>
      {visible && (
        <View style={styles.tooltipTitleContentContainer}>
          <Icon
            size={12}
            source={"triangle"}
            color={theme.colors.text.neutralDefault}
          />
          <View
            style={[
              styles.tooltipTitleContainer,
              { backgroundColor: theme.colors.text.neutralDefault },
            ]}
          >
            <Typography style={{ color: theme.colors.white }}>
              {title}
            </Typography>
          </View>
        </View>
      )}
    </View>
  );
};
