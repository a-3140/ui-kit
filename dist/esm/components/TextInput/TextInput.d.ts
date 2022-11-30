import { ClassNames } from "@lib/globalTypes";
import { InputHTMLAttributes } from "react";
export interface TextInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "checked"> {
    label?: string;
    error?: string;
    classNames?: ClassNames<"container" | "input">;
}
export declare const TextInput: import("react").ForwardRefExoticComponent<TextInputProps & import("react").RefAttributes<HTMLInputElement>>;
