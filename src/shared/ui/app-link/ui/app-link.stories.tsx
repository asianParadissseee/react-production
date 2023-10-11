import type {Meta, StoryObj} from '@storybook/react';

import {ThemeDecorator} from "shared/config/storybook/theme-decorator/theme-decorator";
import {Theme} from "app/providers/theme-provider";
import AppLink, {AppLinkTheme} from "./app-link"

const meta = {
    title: 'shared/app-link',
    component: AppLink,
    tags: ['autodocs'],
    args: {
        to: "/"
    }
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: "text",
        theme: AppLinkTheme.PRIMARY
    }
}

export const Secondary: Story = {
    args: {
        children: "text",
        theme: AppLinkTheme.SECONDARY
    }
}



export const Dark: Story = {
    args: {
        children: "text",
    },
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
}

