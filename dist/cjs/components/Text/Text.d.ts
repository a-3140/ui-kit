import { FC, HTMLAttributes } from "react";
export interface TextProps extends HTMLAttributes<{}> {
    as?: keyof JSX.IntrinsicElements;
    size?: "xs" | "sm" | "md" | "base" | "lg" | "xl";
    color?: "secondary" | "tertiary" | "error" | "success";
    weight?: "normal" | "regular" | "semibold" | "bold";
}
export declare const Text: FC<TextProps>;
