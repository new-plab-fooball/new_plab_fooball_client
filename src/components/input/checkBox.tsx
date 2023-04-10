import { useState } from 'react';
import { CheckBoxContainer, CheckBoxLabel, CheckBoxMark, CheckBoxMarkContainer } from '../../styles/input/checkBox.style';

type CheckBoxType = {
    onChange?:CallableFunction
    label:string
}

const Checkbox = ({onChange,label}:CheckBoxType) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxClick = () => {
    setIsChecked(!isChecked);
    if (onChange) {
      onChange(!isChecked);
    }
  };

  return (
    <CheckBoxContainer onClick={handleCheckboxClick}>
      <CheckBoxMarkContainer>
        {isChecked && <CheckBoxMark />}
      </CheckBoxMarkContainer>
      <CheckBoxLabel>{label}</CheckBoxLabel>
    </CheckBoxContainer>
  );
}

export default Checkbox;