import { SVGAttributes, ReactNode } from "react";
export declare type SvgProps = SVGAttributes<{}>;
export interface SvgContainerProps extends SvgProps {
    size?: number;
    children: ReactNode;
}
export declare const SvgContainer: ({ size, ...rest }: SvgContainerProps) => JSX.Element;
