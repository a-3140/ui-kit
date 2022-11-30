/// <reference types="react" />
import * as react from 'react';
import { ButtonHTMLAttributes, ReactNode, FC, InputHTMLAttributes, MouseEvent, SVGAttributes, LabelHTMLAttributes, SelectHTMLAttributes, ChangeEvent, HTMLAttributes } from 'react';
import { ClassNames as ClassNames$1, HorizontalAlignment as HorizontalAlignment$1 } from '@lib/globalTypes';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string | ReactNode;
    variant?: "primary" | "secondary" | "tertiary";
}
declare const Button: FC<ButtonProps>;

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "className"> {
    label?: string | ReactNode;
    classNames?: ClassNames$1<"container" | "inputContainer" | "input" | "checkbox" | "label">;
}
declare const Checkbox: react.ForwardRefExoticComponent<CheckboxProps & react.RefAttributes<HTMLInputElement>>;

interface ChipProps {
    icon?: ReactNode;
    label: string;
    classNames?: ClassNames$1<"container" | "label" | "button">;
    onClick: (e?: MouseEvent) => void;
}
declare const Chip: FC<ChipProps>;

interface ChipButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    active?: boolean;
}
declare const ChipButton: FC<ChipButtonProps>;

interface IconButtonProps extends Omit<ButtonProps, "variant" | "label">, Partial<Pick<ButtonProps, "label">> {
    icon: ReactNode;
    alignment?: HorizontalAlignment$1;
    variant?: "bare";
}
declare const IconButton: FC<IconButtonProps>;

declare type SvgProps = SVGAttributes<{}>;

declare const AddIcon: (props: SvgProps) => JSX.Element;

declare const AlertIcon: (props: SvgProps) => JSX.Element;

declare const BackIcon: (props: SvgProps) => JSX.Element;

declare const CheckIcon: (props: SvgProps) => JSX.Element;

declare const ChevronDownIcon: (props: SvgProps) => JSX.Element;

declare const DiscountIcon: (props: SvgProps) => JSX.Element;

declare const EditIcon: (props: SvgProps) => JSX.Element;

declare const ErrorIcon: (props: SvgProps) => JSX.Element;

declare const EyeHiddenIcon: (props: SvgProps) => JSX.Element;

declare const EyeIcon: (props: SvgProps) => JSX.Element;

declare const GiftCardIcon: (props: SvgProps) => JSX.Element;

declare const MinusIcon: (props: SvgProps) => JSX.Element;

declare const PhotoIcon: (props: SvgProps) => JSX.Element;

declare const PlusIcon: (props: SvgProps) => JSX.Element;

declare const RemoveIcon: (props: SvgProps) => JSX.Element;

declare const SuccessIcon: (props: SvgProps) => JSX.Element;

declare const TrashIcon: (props: SvgProps) => JSX.Element;

interface InfoTipProps {
    content: string;
    className?: string;
    alignment?: HorizontalAlignment$1;
}
declare const InfoTip: FC<InfoTipProps>;

declare type LabelProps = LabelHTMLAttributes<HTMLLabelElement>;
declare const Label: FC<LabelProps>;

declare type RadioClassNames = ClassNames$1<"container" | "inputContainer" | "input" | "radio" | "label">;
interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "className"> {
    label: string | ReactNode;
    classNames?: RadioClassNames;
}
declare const Radio: react.ForwardRefExoticComponent<RadioProps & react.RefAttributes<HTMLInputElement>>;

declare type RemoveButtonProps = Omit<ButtonProps, "label">;
declare const RemoveButton: FC<RemoveButtonProps>;

interface Option<TData extends string = string> {
    label: string | ReactNode;
    value: TData;
    disabled?: boolean;
    icon?: string | ReactNode;
    [key: string]: unknown;
}
interface SelectProps<TData extends string = string> extends SelectHTMLAttributes<HTMLSelectElement> {
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
    options: Option<TData>[];
    classNames?: ClassNames$1<"container">;
}
declare const Select: react.ForwardRefExoticComponent<SelectProps<string> & react.RefAttributes<HTMLSelectElement>>;

interface SnackbarProps {
    content: string;
    variant?: "success" | "error";
    className?: string;
}
declare const Snackbar: FC<SnackbarProps>;

interface SwitchProps {
    checked?: boolean;
    label?: string;
    classNames?: ClassNames$1<"container" | "toggle" | "label">;
    onChange(checked: boolean): void;
}
declare const Switch: FC<SwitchProps>;

interface TextProps extends HTMLAttributes<{}> {
    as?: keyof JSX.IntrinsicElements;
    size?: "xs" | "sm" | "md" | "base" | "lg" | "xl";
    color?: "secondary" | "tertiary" | "error" | "success";
    weight?: "normal" | "regular" | "semibold" | "bold";
}
declare const Text: FC<TextProps>;

interface TextInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "checked"> {
    label?: string;
    error?: string;
    classNames?: ClassNames$1<"container" | "input">;
}
declare const TextInput: react.ForwardRefExoticComponent<TextInputProps & react.RefAttributes<HTMLInputElement>>;

declare type ClassNames<Keys extends string> = Partial<Record<Keys, string>>;
declare type HorizontalAlignment = "left" | "right";

export { AddIcon, AlertIcon, BackIcon, Button, ButtonProps, CheckIcon, Checkbox, CheckboxProps, ChevronDownIcon, Chip, ChipButton, ChipButtonProps, ChipProps, ClassNames, DiscountIcon, EditIcon, ErrorIcon, EyeHiddenIcon, EyeIcon, GiftCardIcon, HorizontalAlignment, IconButton, IconButtonProps, InfoTip, InfoTipProps, Label, LabelProps, MinusIcon, Option, PhotoIcon, PlusIcon, Radio, RadioClassNames, RadioProps, RemoveButton, RemoveButtonProps, RemoveIcon, Select, SelectProps, Snackbar, SnackbarProps, SuccessIcon, Switch, SwitchProps, Text, TextInput, TextInputProps, TextProps, TrashIcon };
