import { ChangeEvent } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import {
  NormalInputContainer,
  NormalInputLabel,
  NormalInputStyle,
} from "../../styles/common/input.style";

type InputType = {
  type?: "text" | "password" | "email" | "number";
  label?: string;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  resister?: UseFormRegister<FieldValues>;
  params: string;
  disabled?: boolean;
  margin?: string;
};

export const NormalInput = ({
  type,
  label,
  placeholder,
  value,
  onChange,
  resister,
  params,
  disabled,
  margin,
}: InputType) => {
  return (
    <NormalInputContainer>
      {label && <NormalInputLabel>{label}</NormalInputLabel>}
      <NormalInputStyle
        {...resister?.(params)}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value && value}
        disabled={disabled ? true : false}
      />
    </NormalInputContainer>
  );
};
