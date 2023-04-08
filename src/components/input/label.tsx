import styled from "styled-components";

const LabelContainer = styled.label`
  font-size: 18px;
  margin-bottom: 10px;
  color:#222;
  font-weight: 600;
`

const Label = ({labelText}:{labelText:string}) => {
  return (
    <LabelContainer>
      {labelText}
    </LabelContainer>
  );
};

export default Label;