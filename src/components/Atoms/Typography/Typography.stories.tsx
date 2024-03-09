import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import { Typography } from "./Typography";
import { TypographyProps } from "./Typography.types";
import { OriginProvider } from "../../../themes/Origin.provider";

const meta = {
  title: "Typography",
  component: Typography,
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
} as Meta<TypographyProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
