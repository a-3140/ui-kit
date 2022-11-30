import { FC, ReactNode } from "react";
import { ButtonProps } from "../Button/Button";
import { HorizontalAlignment } from "@lib/globalTypes";
export interface IconButtonProps extends Omit<ButtonProps, "variant" | "label">, Partial<Pick<ButtonProps, "label">> {
    icon: ReactNode;
    alignment?: HorizontalAlignment;
    variant?: "bare";
}
export declare const IconButton: FC<IconButtonProps>;
