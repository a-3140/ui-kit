import { SyntheticEvent } from "react";
export declare const useStateWithOnChangeHandler: <TValue extends string | boolean = string>(initialValue?: TValue) => [TValue, (event: SyntheticEvent) => void];
