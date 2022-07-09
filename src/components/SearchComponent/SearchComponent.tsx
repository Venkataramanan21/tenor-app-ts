import { useState } from "react";

const SearchComponent = ({handleSearch}:any): JSX.Element => {
  const [inputFields,setInputFields] = useState<any>({searchValue: ''});
  
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setInputFields({...inputFields,[e.target.name]:e.target.value})
  }
  
  return (
    <div>
      <input value={inputFields.searchValue} onChange={handleChange} name='searchValue'/>
      <button  onClick={() => handleSearch(inputFields.searchValue)}>CLICK TO SEARCH</button>
    </div>
  )
}

export default SearchComponent;