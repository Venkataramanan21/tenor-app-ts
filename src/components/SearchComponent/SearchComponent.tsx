import React, { useState } from "react";
import Styles from './SearchComponent.module.scss';

const SearchComponent = ({handleSearch}:any): JSX.Element => {
  const [inputFields,setInputFields] = useState<any>({searchValue: ''});
  
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setInputFields({...inputFields,[e.target.name]:e.target.value})
  };
  
  const handleKeyDown = (e: any) => {
    if (e.key == 'Enter') {
      handleSearch(inputFields.searchValue);
    }
  };

  return (
    <div className = {Styles.searchComponent}>
      <div className={Styles.inputWrapper}>
        <input value={inputFields.searchValue} onChange={handleChange} name='searchValue' onKeyDown={handleKeyDown}/>
        <button className={Styles.icon} onClick={() => handleSearch(inputFields.searchValue)}>&#x1F50D;</button>
      </div>
    </div>
  )
}

export default SearchComponent;