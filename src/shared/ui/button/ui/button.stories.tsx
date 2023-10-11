import type {Meta, StoryObj} from '@storybook/react';

import Button, {ThemeButton} from './button';
import {ThemeDecorator} from "shared/config/storybook/theme-decorator/theme-decorator";
import {Theme} from "app/providers/theme-provider";

const meta = {
    title: 'shared/button',
    component: Button,
    tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: "Text",
    },
};

export const Clear: Story = {
    args: {
        children: "Text",
        theme: ThemeButton.CLEAR
    },
}

export const Outlined: Story = {
    args: {
        children: "Text",
        theme: ThemeButton.OUTLINED
    },

}

export const OutlinedDark: Story = {
    args: {
        children: "Text",
        theme: ThemeButton.OUTLINED
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ]
}
