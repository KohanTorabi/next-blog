import { DetailedHTMLProps, InputHTMLAttributes, TextareaHTMLAttributes } from "react";

export type HTMLInputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export type HTMLTextAreaProps = DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

export type EnhanceInputProps = HTMLInputProps | HTMLTextAreaProps;

export type InputProps = EnhanceInputProps & {
  multiline?: boolean;
};