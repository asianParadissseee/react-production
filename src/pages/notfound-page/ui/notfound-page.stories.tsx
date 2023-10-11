import type {Meta, StoryObj} from '@storybook/react';

import {ThemeDecorator} from "shared/config/storybook/theme-decorator/theme-decorator";
import {Theme} from "app/providers/theme-provider";
import NotfoundPage from "./notfound-page"
const meta = {
    title: 'pages/notfound-page',
    component: NotfoundPage,
    tags: ['autodocs'],
} satisfies Meta<typeof NotfoundPage>;

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

