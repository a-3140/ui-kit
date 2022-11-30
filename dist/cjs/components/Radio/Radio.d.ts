import { ReactNode, InputHTMLAttributes } from "react";
import { ClassNames } from "@lib/globalTypes";
export declare type RadioClassNames = ClassNames<"container" | "inputContainer" | "input" | "radio" | "label">;
export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "className"> {
    label: string | ReactNode;
    classNames?: RadioClassNames;
}
export declare const Radio: import("react").ForwardRefExoticComponent<RadioProps & import("react").RefAttributes<HTMLInputElement>>;
