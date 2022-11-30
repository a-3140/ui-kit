import { FC, ButtonHTMLAttributes } from "react";
export interface ChipButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    active?: boolean;
}
export declare const ChipButton: FC<ChipButtonProps>;
