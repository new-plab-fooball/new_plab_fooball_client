import { CheckBoxListContainer } from '../../styles/common/checkBox.style';
import Checkbox from './checkBox';

type CheckBoxListType = {
  checkList:string[]
}

const CheckboxList = ({checkList}:CheckBoxListType) => {
  return (
    <CheckBoxListContainer>
      {
        checkList.map((el:string) => {
          return <Checkbox label={el}/>
        })
      }
    </CheckBoxListContainer>
  );
}

export default CheckboxList;