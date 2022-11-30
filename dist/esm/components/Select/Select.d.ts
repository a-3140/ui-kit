import { ChangeEvent, ReactNode, SelectHTMLAttributes } from "react";
import { ClassNames } from "@lib/globalTypes";
export interface Option<TData extends string = string> {
    label: string | ReactNode;
    value: TData;
    disabled?: boolean;
    icon?: string | ReactNode;
    [key: string]: unknown;
}
export declare type SelectOnChangeHandler<TData extends string = string> = (value: TData) => void;
export interface SelectProps<TData extends string = string> extends SelectHTMLAttributes<HTMLSelectElement> {
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
    options: Option<TData>[];
    classNames?: ClassNames<"container">;
}
export declare const Select: import("react").ForwardRefExoticComponent<SelectProps<string> & import("react").RefAttributes<HTMLSelectElement>>;
