import { GestureResponderEvent, ScrollView, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { Icon } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "./src/components/Molecules/Button/Button";

import { Typography } from "./src/components/Atoms/Typography/Typography";
import {
  Icon as TextInputIcon,
  Input,
} from "./src/components/Molecules/Input/Input";
import { useState } from "react";
import { Chip } from "./src/components/Molecules/Chip/Chip";
import { OriginProvider } from "./src/themes/Origin.provider";
import { IconButton } from "./src/components/Atoms/IconButton/IconButton";
import { Tooltip } from "./src/components/Molecules/Tooltip/Tooltip";
import { Progress } from "./src/components/Atoms/Progress/Progress";
import { Stack } from "./src/components/Atoms/Stack/Stack";

function App() {
  const [showPass, setShowPass] = useState(false);

  const [selected1, setSelected1] = useState(false);
  const [selected2, setSelected2] = useState(false);

  const handlePress1 = (e: GestureResponderEvent) => {
    setSelected1(!selected1);
    console.log("Pressed", e);
  };

  const handlePress2 = (e: GestureResponderEvent) => {
    setSelected2(!selected2);
    console.log("Pressed", e);
  };
  return (
    <OriginProvider>
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <Typography variant="displayLarge">Origin UI</Typography>

          <Stack direction="column" spacing={12}>
            <Chip
              onPress={handlePress1}
              selected={selected1}
              icon="wallet-outline"
            >
              Managing my spending
            </Chip>
            <Chip
              onPress={handlePress2}
              selected={selected2}
              icon="wallet-outline"
            >
              Filing my taxes{" "}
            </Chip>
          </Stack>

          <IconButton icon="arrow-left" onPress={() => alert("Pressed")} />

          <Button
            mode="contained-tonal"
            icon={() => <Icon source="arrow-right" color="white" size={20} />}
            onPress={() => alert("Pressed")}
          >
            Next
          </Button>

          <Button
            fullWidth
            mode="contained"
            icon="arrow-right"
            onPress={() => alert("Pressed")}
          >
            Continue
          </Button>

          <Button
            disabled
            mode="contained"
            icon="arrow-right"
            textColor="#5c5c5d"
            onPress={() => alert("Pressed")}
          >
            Button Disabled
          </Button>

          <Typography variant="titleMedium">Typography</Typography>

          <Tooltip
            title="Information"
            icon={{
              source: "information-outline",
              size: 22,
            }}
          />

          <Input label="Information" placeholder="Information Type here!" />

          <Input
            label="Information"
            tooltip={{
              icon: {
                size: 20,
                source: "information-outline",
              },
              title: "A vida já fez mais sentido",
            }}
            placeholder="Information Type here!"
            secureTextEntry={!showPass}
            right={
              <TextInputIcon
                onPress={() => setShowPass((prev) => !prev)}
                icon={showPass ? "eye" : "eye-off"}
              />
            }
          />

          <Progress steps={3} currentStep={1} />
        </SafeAreaView>
      </ScrollView>
    </OriginProvider>
  );
}

let AppEntryPoint = App;

if (Constants.expoConfig?.extra?.storybookEnabled === "true") {
  AppEntryPoint = require("./.ondevice").default;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    alignItems: "center",
    gap: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});

export default AppEntryPoint;
