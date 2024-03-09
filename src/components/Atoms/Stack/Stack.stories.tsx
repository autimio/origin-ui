import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import { Stack } from "./Stack";
import { StackProps } from "./Stack.types";
import { OriginProvider } from "../../../themes/Origin.provider";

const meta = {
  title: "Stack",
  component: Stack,
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
} as Meta<StackProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
