import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import { Chip } from "./Chip";
import { OriginProvider } from "../../../themes/Origin.provider";

const meta = {
  title: "Chip",
  component: Chip,
  args: {
    children: "Hello world",
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
