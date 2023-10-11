import "app/styles/index.scss"
import {Story, StoryFn, StoryObj} from "@storybook/react";
import {FC, ReactNode} from "react";


// export const StyleDecorator = (story: () => StoryFn<ReactNode>) => story()
//
export const StyleDecorator = (story: () => Story) => story()
