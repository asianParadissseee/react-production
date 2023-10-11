import type {Preview} from "@storybook/react";
import {StyleDecorator} from "../../src/shared/config/storybook/style-decorator/style-decorator";
import {ThemeDecorator} from "../../src/shared/config/storybook/theme-decorator/theme-decorator";
import {Theme} from "../../src/app/providers/theme-provider";
import {RouteDecorator} from "../../src/shared/config/storybook/route-decorator/route-decorator";

const preview: Preview = {
    parameters: {
        actions: {argTypesRegex: "^on[A-Z].*"},
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    decorators: [StyleDecorator, ThemeDecorator(Theme.LIGHT), RouteDecorator]
};


export default preview;
