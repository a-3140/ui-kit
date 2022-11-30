import { FC, ReactNode, MouseEvent } from "react";
import { ClassNames } from "@lib/globalTypes";
export interface ChipProps {
    icon?: ReactNode;
    label: string;
    classNames?: ClassNames<"container" | "label" | "button">;
    onClick: (e?: MouseEvent) => void;
}
export declare const Chip: FC<ChipProps>;
