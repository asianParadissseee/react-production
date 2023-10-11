import type {Meta, StoryObj} from '@storybook/react';

import {ThemeDecorator} from "shared/config/storybook/theme-decorator/theme-decorator";
import {Theme} from "app/providers/theme-provider";
import ThemeSwitcher from "./theme-switcher"

const meta = {
    title: 'shared/theme-switcher',
    component: ThemeSwitcher,
    tags: ['autodocs'],
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Light: Story = {
    args: {},
}
export const Dark: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
}

