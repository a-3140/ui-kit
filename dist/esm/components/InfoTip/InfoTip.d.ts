import { FC } from "react";
import { HorizontalAlignment } from "@lib/globalTypes";
export interface InfoTipProps {
    content: string;
    className?: string;
    alignment?: HorizontalAlignment;
}
export declare const InfoTip: FC<InfoTipProps>;
