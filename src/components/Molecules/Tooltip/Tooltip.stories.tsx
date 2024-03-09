import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import { Tooltip } from "./Tooltip";
import { OriginProvider } from "../../../themes/Origin.provider";

const meta = {
  title: "Tooltip",
  component: Tooltip,
  args: {
    title: "Hello world",
    icon: {
      source: "information-outline",
      color: "black",
      size: 20,
    },
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
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
