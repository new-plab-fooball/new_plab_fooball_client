import { useState } from "react";
import { ModalBackground } from "../../styles/common/public.style";
import { Option, OptionsTitle, OptionsWrapper, SelectContainer, SelectOnButton } from "../../styles/common/select.style";
import Label from "./label";

type CustomSelectType = {
    options:string[],
    onChange?:CallableFunction,
    label?:string
    selectColor?:string
}

export const Select = ({ options, onChange,label,selectColor }:CustomSelectType) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionClick = (option:string) => {
    setSelectedOption(option);
    onChange && onChange(option);
    setIsOpen(false);
  };

  return (
    <SelectContainer>
      {label && <Label labelText={label}/>}
      <SelectOnButton color={selectedOption && selectColor} onClick={() => setIsOpen(!isOpen)}>
        {selectedOption ? selectedOption : `클릭하여 ${label}을 선택해주세요.`}
      </SelectOnButton>
      {isOpen && (
        <>
            <ModalBackground />
            <OptionsWrapper>
                <OptionsTitle>{label}을 선택해주세요.</OptionsTitle>
                {options.map((option, idx) => (
                    <Option key={idx} onClick={() => handleOptionClick(option)}>
                    {option}
                    </Option>
                ))}
            </OptionsWrapper>
        </>
        
      )}
    </SelectContainer>
  );
}