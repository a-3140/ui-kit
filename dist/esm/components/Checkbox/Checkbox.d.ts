import { ReactNode, InputHTMLAttributes } from "react";
import { ClassNames } from "@lib/globalTypes";
export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "className"> {
    label?: string | ReactNode;
    classNames?: ClassNames<"container" | "inputContainer" | "input" | "checkbox" | "label">;
}
export declare const Checkbox: import("react").ForwardRefExoticComponent<CheckboxProps & import("react").RefAttributes<HTMLInputElement>>;
