import { Dispatch, SetStateAction, useState } from 'react';
import { TagContainer } from '../../styles/input/tags.style';

const Tag = (
  {
    text,
    color,
    fontSize,
    onClick,
    setIsSelects,
    isSelects,
    type,
    idx,
    tagWidth
  }:
  {
    onClick?:CallableFunction
    text:string | number;
    color:string;
    fontSize:string
    setIsSelects:Dispatch<SetStateAction<boolean[]>>,
    isSelects:boolean[]
    type:"radio" | "checkbox",
    idx:number,
    tagWidth?:string
  }) => {
  const [isSelect,setIsSelect] = useState(false)
  const onClickTag = () => {
    if(type === "radio"){
      setIsSelects((prev:boolean[]) => {
        return prev.map((el:boolean, idx_child:number) => {
          if(idx === idx_child){
            return true
          }else{
            return false
          }
        })
      })
    }else{
      setIsSelect(prev => !prev)
    }
    onClick && onClick(text)
  }
  return (
    <TagContainer 
      tagWidth={tagWidth && tagWidth}
      onClick={onClick ? onClickTag : () => {}} 
      isSelect={type === "radio" ? isSelects[idx] : isSelect } 
      color={color} 
      fontSize={fontSize}
    >
      {text}
    </TagContainer>
  );
};

export default Tag;