import { FC } from "react";
export interface SnackbarProps {
    content: string;
    variant?: "success" | "error";
    className?: string;
}
export declare const Snackbar: FC<SnackbarProps>;
