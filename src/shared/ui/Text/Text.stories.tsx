import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import Text, {TextTheme} from "./Text"
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'title lorem ipsum',
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit"
};
export const Error = Template.bind({});
Error.args = {
    title: 'title lorem ipsum',
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    theme: TextTheme.ERROR
};
export const onlyTitle = Template.bind({});
onlyTitle.args = {
    title: 'title lorem ipsum',
};
export const onlyText = Template.bind({});
onlyText.args = {
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit"
};
export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'title lorem ipsum',
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit"
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]
export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
    title: 'title lorem ipsum',
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)]

export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit"
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)]

