import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import { Button } from "./Button";
import { OriginProvider } from "../../../themes/Origin.provider";

const meta = {
  title: "Button",
  component: Button,
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
