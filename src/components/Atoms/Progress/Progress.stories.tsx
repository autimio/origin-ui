import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import { Progress } from "./Progress";
import { OriginProvider } from "../../../themes/Origin.provider";

const meta = {
  title: "Progress",
  component: Progress,
  args: {
    steps: 4,
    currentStep: 2,
  },
  decorators: [
    (Story) => (
      <OriginProvider>
        <View style={{ padding: 16 }}>
          <Story />
        </View>
      </OriginProvider>
    ),
  ],
} as Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
