import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  tooltipContainer: {
    alignItems: "center",
    position: "relative",
  },
  tooltipTitleContentContainer: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    position: "absolute",
    top: 24,
    zIndex: 10,
  },
  tooltipTitleContainer: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
    marginTop: -2,
    minWidth: 124,
    textAlign: "center",
    alignItems: "center",
  },
});
