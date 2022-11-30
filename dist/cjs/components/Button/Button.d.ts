import { FC, ReactNode, ButtonHTMLAttributes } from "react";
interface ButtonLabelProps {
    content: string;
    className?: string;
}
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string | ReactNode;
    variant?: "primary" | "secondary" | "tertiary";
}
export declare const ButtonLabel: FC<ButtonLabelProps>;
export declare const Button: FC<ButtonProps>;
export {};
