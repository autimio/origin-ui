import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import { IconButton } from "./IconButton";
import { IconButtonProps } from "./IconButton.types";
import { OriginProvider } from "../../../themes/Origin.provider";

const meta = {
  title: "IconButton",
  component: IconButton,
  args: {
    icon: "star",
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
} as Meta<IconButtonProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
