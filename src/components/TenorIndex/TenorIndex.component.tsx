/* eslint-disable react/react-in-jsx-scope */
import React, {useEffect, useState } from "react";
import PresentGIF from "../PresentGIF/PresentGIF";
import SearchComponent from "../SearchComponent/SearchComponent";
import TrendingCarousel from "../TrendingCarousel/TrendingCarousel";
import { searchGIF, trendingGIF, trendingTenorSearches } from "./TenorIndex.services";

interface TenorIndexInputField {
  searchValue: string;
}



const TenorIndex = ():JSX.Element => {

  // const [inputFields,setInputFields] = useState<TenorIndexInputField>({searchValue:''});
  const [searchResult, setSearchResult] = useState<any>();
  const [trending, setTrending]= useState<any>();

  // const handleSearchValue = (e:React.ChangeEvent<HTMLInputElement>) => {
  //   console.log(e.target.value);
  //   setInputFields({...inputFields,[e.target.name]:e.target.value})
  // }

  const handleSearch = async (value:string) => {
    const result = await searchGIF(value);
    setSearchResult(result);
  }
  const fetchTrendingTenorSearches = async () => {
    const result = await trendingGIF();
    setTrending(result);
  }

  console.log('search results',searchResult)

  useEffect(() => {
    fetchTrendingTenorSearches();
  },[])

  return (
    <div className = 'container'>
      <SearchComponent handleSearch={handleSearch} />
      {/* <input value={inputFields.searchValue} onChange={handleSearchValue} name='searchValue'/>
      <button className='btn' onClick={handleSearch}>CLICK TO SEARCH</button> */}
      <TrendingCarousel trendingArray={trending}/>
      <PresentGIF datas = {searchResult}/>
    </div>
  )
}

export default TenorIndex;