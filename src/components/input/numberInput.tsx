import { ChangeEvent, useState } from 'react';

type NumberInputType = {
    tags:number[]
}

const NumberInput = ({tags}:NumberInputType) => {
  const [value, setValue] = useState('');


  const handleInputChange = (e:ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);
  };

  const handleTagClick = (tag:number) => {
    setValue(value + tag);
  };


  return (
    <div className="number-input">
      <input
        type="number"
        value={value}
        onChange={handleInputChange}
      />
      <div className="tags">
        {tags.map((tag:number) => (
          <div
            key={tag}
            className="tag"
            onClick={() => handleTagClick(tag)}
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NumberInput;
