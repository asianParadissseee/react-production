import type {Meta, StoryObj} from '@storybook/react';

import {ThemeDecorator} from "shared/config/storybook/theme-decorator/theme-decorator";
import {Theme} from "app/providers/theme-provider";
import AboutPage from "./about-page"
const meta = {
    title: 'pages/about-page',
    component: AboutPage,
    tags: ['autodocs'],
} satisfies Meta<typeof AboutPage>;

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

