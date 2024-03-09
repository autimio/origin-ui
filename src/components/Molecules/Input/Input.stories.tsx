import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import { Input } from "./Input";
import { OriginProvider } from "../../../themes/Origin.provider";

const meta = {
  title: "Input",
  component: Input,
  args: {
    label: "Hello world",
    placeholder: "Hello world",
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
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
