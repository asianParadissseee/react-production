import {Story, StoryFn} from "@storybook/react";
import {ReactNode} from "react";
import {Theme} from "app/providers/theme-provider";

export const ThemeDecorator = (theme: Theme)=> (StoryComponent: Story) => {
    return (
        <div className={`app ${theme}`}>
            <StoryComponent/>
        </div>
    )
}
