import type {Meta, StoryObj} from '@storybook/react';

import {ThemeDecorator} from "shared/config/storybook/theme-decorator/theme-decorator";
import {Theme} from "app/providers/theme-provider";
import ErrorPage from "./error-page"
const meta = {
    title: 'widget/error-page',
    component: ErrorPage,
    tags: ['autodocs'],
} satisfies Meta<typeof ErrorPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
    },
};

export const Dark: Story = {
    args: {
    },
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
}

