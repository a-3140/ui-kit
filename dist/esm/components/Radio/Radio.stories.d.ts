/// <reference types="react" />
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { RadioProps } from "./Radio";
declare const _default: ComponentMeta<import("react").ForwardRefExoticComponent<RadioProps & import("react").RefAttributes<HTMLInputElement>>>;
export default _default;
declare const Template: ({ customOptions, }: {
    customOptions: Array<{
        value: string;
        label: React.ReactNode;
        classNames: Record<string, string>;
    }>;
}) => JSX.Element;
export declare const CustomLook: ComponentStory<typeof Template>;
