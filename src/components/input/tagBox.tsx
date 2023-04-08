import { useState } from 'react';
import { TagBoxContainer } from '../../styles/common/tags.style';
import Label from './label';
import Tag from './tag';

const TagBox = (
  {
    type,
    onClick,
    label,
    tagList,
    tagWidth
  }:{
    type:"radio" | "checkbox"
    onClick?:CallableFunction,
    label:string,
    tagList:{text:string | number,color:string;fontSize:string}[],
    tagWidth?:string
  }
) => {
  const [isSelects,setIsSelects] = useState(new Array(tagList.length).fill(false))
  return (
    <>
     {label && <Label labelText={label}/>}
    <TagBoxContainer>
      {
        tagList.map((el:{text:string | number,color:string;fontSize:string},idx:number) => {
          return <Tag 
            key={el + String(idx) + Date.now()}
            onClick={() => onClick && onClick(el.text)}
            isSelects={isSelects}
            setIsSelects={setIsSelects}
            type={type}
            idx={idx}
            text={el.text} 
            color={el.color} 
            fontSize={el.fontSize} 
            tagWidth={tagWidth && tagWidth}
          />
        })
      }
    </TagBoxContainer>
    </>
   
  );
};

export default TagBox;