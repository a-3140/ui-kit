import { FC } from "react";
import { ClassNames } from "@lib/globalTypes";
export interface SwitchProps {
    checked?: boolean;
    label?: string;
    classNames?: ClassNames<"container" | "toggle" | "label">;
    onChange(checked: boolean): void;
}
export declare const Switch: FC<SwitchProps>;
